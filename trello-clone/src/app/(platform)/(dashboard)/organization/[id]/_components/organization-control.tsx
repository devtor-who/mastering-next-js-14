'use client';

import { useOrganizationList } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export function OrganizationControl() {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) {
      return;
    }

    setActive({
      organization: String(params.id),
    });
  }, [setActive, params.id]);

  return null;
}
