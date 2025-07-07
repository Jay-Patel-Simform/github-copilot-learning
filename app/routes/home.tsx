import { Button } from '~/components/ui/button';
import Header from '~/components/header';

// Simple icon component for demonstration
const PlusIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-center">
            <h1 className="heading-large mb-4">SaasAble Button Components</h1>
            <p className="paragraph-medium text-muted-foreground">
              Button components following the SaasAble design system
              specifications from Figma
            </p>
          </div>

          {/* Filled Buttons */}
          <section className="space-y-6">
            <h2 className="display-medium">Filled Buttons</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" size="sm">
                  Small
                </Button>
                <Button variant="filled" size="md">
                  Medium
                </Button>
                <Button variant="filled" size="lg">
                  Large
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" size="sm" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="filled" size="md" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="filled" size="lg" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" size="sm" rightIcon={<PlusIcon />}>
                  Right Icon
                </Button>
                <Button variant="filled" size="md" rightIcon={<PlusIcon />}>
                  Right Icon
                </Button>
                <Button variant="filled" size="lg" rightIcon={<PlusIcon />}>
                  Right Icon
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" size="sm" leftIcon={<PlusIcon />} />
                <Button variant="filled" size="md" leftIcon={<PlusIcon />} />
                <Button variant="filled" size="lg" leftIcon={<PlusIcon />} />
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" size="sm" disabled>
                  Disabled
                </Button>
                <Button variant="filled" size="md" disabled>
                  Disabled
                </Button>
                <Button variant="filled" size="lg" disabled>
                  Disabled
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="filled" size="sm" loading>
                  Loading
                </Button>
                <Button variant="filled" size="md" loading>
                  Loading
                </Button>
                <Button variant="filled" size="lg" loading>
                  Loading
                </Button>
              </div>
            </div>
          </section>

          {/* Outlined Buttons */}
          <section className="space-y-6">
            <h2 className="display-medium">Outlined Buttons</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="outlined" size="sm">
                  Small
                </Button>
                <Button variant="outlined" size="md">
                  Medium
                </Button>
                <Button variant="outlined" size="lg">
                  Large
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="outlined" size="sm" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="outlined" size="md" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="outlined" size="lg" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="outlined" size="sm" disabled>
                  Disabled
                </Button>
                <Button variant="outlined" size="md" disabled>
                  Disabled
                </Button>
                <Button variant="outlined" size="lg" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </section>

          {/* Text Buttons */}
          <section className="space-y-6">
            <h2 className="display-medium">Text Buttons</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="text" size="sm">
                  Small
                </Button>
                <Button variant="text" size="md">
                  Medium
                </Button>
                <Button variant="text" size="lg">
                  Large
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="text" size="sm" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="text" size="md" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="text" size="lg" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="text" size="sm" disabled>
                  Disabled
                </Button>
                <Button variant="text" size="md" disabled>
                  Disabled
                </Button>
                <Button variant="text" size="lg" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </section>

          {/* Elevated Buttons */}
          <section className="space-y-6">
            <h2 className="display-medium">Elevated Buttons</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="elevated" size="sm">
                  Small
                </Button>
                <Button variant="elevated" size="md">
                  Medium
                </Button>
                <Button variant="elevated" size="lg">
                  Large
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="elevated" size="sm" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="elevated" size="md" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
                <Button variant="elevated" size="lg" leftIcon={<PlusIcon />}>
                  With Icon
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="elevated" size="sm" disabled>
                  Disabled
                </Button>
                <Button variant="elevated" size="md" disabled>
                  Disabled
                </Button>
                <Button variant="elevated" size="lg" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </section>

          {/* Destructive Buttons */}
          <section className="space-y-6">
            <h2 className="display-medium">Destructive Buttons</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
                <Button variant="destructive" size="md">
                  Delete
                </Button>
                <Button variant="destructive" size="lg">
                  Delete
                </Button>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="destructive" size="sm" disabled>
                  Disabled
                </Button>
                <Button variant="destructive" size="md" disabled>
                  Disabled
                </Button>
                <Button variant="destructive" size="lg" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
