import React from 'react';
import { OrganizationControl } from './_components/organization-control';

function OrganizationIdLayout({
  children, //
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
}

export default OrganizationIdLayout;
