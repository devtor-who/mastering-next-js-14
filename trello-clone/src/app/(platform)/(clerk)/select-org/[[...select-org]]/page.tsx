import { OrganizationList } from '@clerk/nextjs';
import React from 'react';

function CreateOrganizationPage() {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl={`/organization/:id`} //
      afterSelectOrganizationUrl={`/organization/:id`}
    />
  );
}

export default CreateOrganizationPage;
