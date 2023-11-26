'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useAccordion, useOrganizaionSidebar } from './sidebar.hooks';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import { NavItem } from './nav-item';

type SidebarProps = {
  storageKey?: string;
};

export function Sidebar({
  storageKey = 't-sidebar-state', //
}: SidebarProps) {
  const { expanded, onExpand, defaultAccordionValue } = useAccordion(storageKey);
  const { isLoading, userMemberships, activeOrg } = useOrganizaionSidebar();

  if (isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-2">워크스페이스</span>

        <Button asChild type="button" size={`sm-icon`} variant={`ghost`} className="ml-auto mr-0.5">
          <Link href={`/select-org`}>
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={defaultAccordionValue} className="space-y-2">
        {userMemberships.data?.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isExpanded={expanded[organization.id]}
            onExpand={onExpand}
            organization={organization}
          />
        ))}
      </Accordion>
    </>
  );
}
