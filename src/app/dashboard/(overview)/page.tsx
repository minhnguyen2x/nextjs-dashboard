import { RevenueChart } from '@features/dashboard/components/revenue-chart';
import { LatestInvoices } from '@features/dashboard/components/latest-invoices';
import { lusitana } from '@shared/assets/font/lusitana';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/features/dashboard/components/revenue-chart-skeleton';
import { LatestInvoicesSkeleton } from '@/features/dashboard/components/latest-invoices-skeleton';
import { CardWrapper } from '@/features/dashboard/components/cards';
import { CardsSkeleton } from '@/features/dashboard/components/cards-skeleton';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
