import { koKR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';

function PlatformLayout({
  children, //
}: {
  children: React.ReactNode;
}) {
  return <ClerkProvider localization={koKR}>{children}</ClerkProvider>;
}

export default PlatformLayout;
