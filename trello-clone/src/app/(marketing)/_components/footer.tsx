import { Button } from '@/components/ui/button';

function FooterButtons() {
  return (
    <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
      <Button size={`sm`} variant={`ghost`}>
        개인정보처리약관
      </Button>
      <Button size={`sm`} variant={`ghost`}>
        서비스이용약관
      </Button>
    </div>
  );
}

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t shadow-md bg-slate-100 flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <FooterButtons />
      </div>
    </div>
  );
}
