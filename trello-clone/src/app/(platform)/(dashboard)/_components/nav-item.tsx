'use client';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { OrganizationResource } from '@clerk/types';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export type Organization = Pick<OrganizationResource, 'id' | 'slug' | 'imageUrl' | 'name'>;

type NavItemProps = {
  isExpanded: boolean;
  isActive: boolean;
  organization: Organization;
  onExpand(id: string): void;
};

export function NavItem({
  organization, //
  onExpand,
  isActive,
  isExpanded,
}: NavItemProps) {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = (href: string) => {
    router.push(href);
  };

  const routes = [
    {
      label: 'Boards', //
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: 'Activity', //
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: '설정', //
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: '구독관리', //
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          `flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md 
      hover:bg-neutral-300/50 transition text-start no-underline hover:no-underline`,
          isActive && !isExpanded ? 'bg-sky-500/10 hover:bg-sky-300/50 text-sky-700' : '',
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image fill src={organization.imageUrl} alt="Organization Image" className="rounded-sm object-center object-cover" />
          </div>

          <span className="font-medium text-xs">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((route) => (
          <Button
            key={route.href}
            size={`sm`}
            onClick={() => onClick(route.href)}
            variant={`ghost`}
            className={cn(`w-full font-normal justify-start pl-10 mb-1`, pathname === route.href ? 'bg-sky-500/10 text-sky-700' : '')}
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
