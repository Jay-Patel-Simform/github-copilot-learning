import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '~/components/ui/select';

// Component Props
interface LanguageSelectorProps {
  className?: string;
  size?: 'sm' | 'md';
}

const LANGUAGE_OPTIONS = [
  { value: 'en', label: 'ENG' },
  { value: 'es', label: 'ESP' },
  { value: 'fr', label: 'FRA' },
];

export const LanguageSelector = ({
  className = '',
  size = 'md',
}: LanguageSelectorProps) => {
  const sizeClasses = {
    sm: 'h-auto px-4 py-2 min-w-[80px]',
    md: 'h-10! px-4',
  };

  return (
    <Select>
      <SelectTrigger
        className={`transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] border border-primary bg-transparent !text-primary hover:bg-primary/8 active:bg-primary/12 focus-visible:bg-primary/12 font-semibold rounded-full ${className} ${sizeClasses[size]}`}
      >
        <SelectValue placeholder="ENG" />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGE_OPTIONS.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
