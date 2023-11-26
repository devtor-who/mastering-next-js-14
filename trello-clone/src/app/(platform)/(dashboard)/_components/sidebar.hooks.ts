import { useLocalStorage } from 'usehooks-ts';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

export function useAccordion(storageKey: string = 't-sidebar-state') {
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(storageKey, {});

  const defaultAccordionValue = Object.keys(expanded).reduce((acc: string[], key: string) => {
    if (expanded[key]) {
      acc.push(key);
    }

    return acc;
  }, []);

  const onExpand = (id: string) => {
    setExpanded((cur) => {
      return { ...cur, [id]: !expanded[id] };
    });
  };

  return {
    expanded, //
    onExpand,
    defaultAccordionValue,
  };
}

export function useOrganizaionSidebar() {
  const {
    organization: activeOrg, //
    isLoaded: isLoadedOrg,
  } = useOrganization();

  const {
    userMemberships, //
    isLoaded: isLoadedOrgList,
  } = useOrganizationList({
    userMemberships: {
      infinite: true, //
    },
  });

  const isLoading = !isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading;

  return {
    isLoading, //
    activeOrg,
    userMemberships,
  };
}
