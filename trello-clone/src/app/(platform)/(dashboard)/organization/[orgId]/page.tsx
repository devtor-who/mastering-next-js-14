import { OrganizationSwitcher, auth } from '@clerk/nextjs';
import React from 'react';

function OrganizationPage() {
  const { userId, orgId } = auth();

  return (
    <div>
      <OrganizationSwitcher hidePersonal />
      orgId: {orgId}
    </div>
  );
}

export default OrganizationPage;
