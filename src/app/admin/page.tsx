import Card from "@/components/Card";
import prisma from "../../db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";

async function getSalesData() {
  const data = await prisma.order.aggregate({
    _sum: { PricePaidInCents: true },
    _count: true,
  });
  return {
    amount: (data._sum.PricePaidInCents || 0) / 100,
    numberOfsales: data._count || 0,
  };
}

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    prisma.user.count(),
    prisma.order.aggregate({
      _sum: { PricePaidInCents: true },
    }),
  ]);

  return {
    userCount,
    averageValuePerUser:
      userCount === 0 ? 0 : (orderData._sum.PricePaidInCents || 0) / userCount,
  };
}

async function getProducts() {
  const [activeProducts, inactiveProducts] = await Promise.all([
    prisma.product.count({ where: { isAvailableForPurchase: true } }),
    prisma.product.count({ where: { isAvailableForPurchase: false } }),
  ]);
  return {
    activeProducts,
    inactiveProducts,
  };
}

async function adminDashboard() {
  const [salesData, userData, productsData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProducts(),
  ]);

  return (
    <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <Card
        title="Sales"
        subTitle={`${formatNumber(salesData.numberOfsales)} orders `}
        body={formatCurrency(salesData.amount)}
      />
      <Card
        title="Customers"
        subTitle={`${formatCurrency(userData.averageValuePerUser)} Average Value `}
        body={formatNumber(userData.userCount)}
      />
      <Card
        title="Products"
        subTitle={`${formatNumber(productsData.inactiveProducts)} Inactive `}
        body={formatNumber(productsData.activeProducts)}
      />
    </div>
  );
}

export default adminDashboard;
