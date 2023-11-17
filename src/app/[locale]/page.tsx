import { Badge } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { AccordionDemo } from '@/components/ui/Accordion/Demo';
import { AlertDemo } from '@/components/ui/Alert/Demo';
import { AlertDialogDemo } from '@/components/ui/AlertDialog/Demo';
import { AvatarDemo } from '@/components/ui/Avatar/Demo';
import { Button } from '@/components/ui/Button';
import { Calendar } from '@/components/ui/Calendar';
import { CardWithFormDemo } from '@/components/ui/Card/Demo';
import { CheckboxWithText } from '@/components/ui/Checkbox/Demo';
import { CollapsibleDemo } from '@/components/ui/Collapsible/Demo';
import { CommandDemo } from '@/components/ui/Command/Demo';
import { ContextMenuDemo } from '@/components/ui/ContextMenu/Demo';
import { DialogDemo } from '@/components/ui/Dialog/Demo';
import { DropdownMenuDemo } from '@/components/ui/DropdownMenu/Demo';
import LangToggle from '@/components/LangToggle';
import ThemeToggle from '@/components/ThemeToggle';
import { Link } from '@/navigation';
const Home = () => {
  const t = useTranslations('Index');

  useLocale();

  return (
    <div className="scrollbar flex flex-col items-center gap-4 p-4">
      <div className="flex items-end justify-end">
        <LangToggle />
      </div>
      <div>
        <p>{t('title')}</p>
        <p>{t('subtitle')}</p>
        <Link href="/login">Login</Link>
      </div>
      <ThemeToggle />
      <Button>Click me</Button>
      <AccordionDemo />
      <DropdownMenuDemo />
      <AlertDemo />
      <AlertDialogDemo />
      <AvatarDemo />
      <div>
        <Badge>Badge</Badge>
      </div>
      <Calendar />
      <CardWithFormDemo />
      <CheckboxWithText />
      <CollapsibleDemo />
      <CommandDemo />
      <ContextMenuDemo />
      <DialogDemo />
    </div>
  );
};

export default Home;
