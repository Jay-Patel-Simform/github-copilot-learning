import { Button } from '~/components/ui/button';

interface HeroSectionProps {
  readonly className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <header
      className={`w-full flex flex-col items-center bg-background ${className ?? ''}`}
      aria-label="Hero section introducing SaasAble CRM"
    >
      {/* Mobile and Tablet Layout */}
      <div className="flex flex-col items-center gap-6 py-8 md:gap-8 md:py-10 lg:gap-10 lg:py-12">
        <div className="w-full flex flex-col items-center gap-4 md:gap-8 lg:gap-6">
          {/* Beta announcement */}
          <section
            className="flex items-center gap-2.5 px-6 py-2 bg-muted rounded-[74px]"
            aria-label="Beta announcement"
          >
            <span className="label-small text-center text-muted-foreground">
              New Beta Version is Release explore now
            </span>
          </section>

          {/* Main heading */}
          <div className="w-full flex flex-col items-center gap-3 lg:gap-2">
            <h1 className="w-full flex flex-col items-center gap-1">
              <span className="heading-large text-center text-foreground">
                Effortless CRM Management,
              </span>
              <div className="flex justify-center items-center gap-1 md:w-full md:gap-2 lg:w-[1008px] lg:gap-3">
                <span className="heading-large text-foreground">
                  Seamless Business
                </span>

                {/* Animated switch element */}
                <div
                  className="flex flex-col justify-stretch items-stretch gap-2.5 p-[3px] w-[68px] h-11 rounded-[67px] bg-gradient-to-r from-purple-100 to-purple-200 md:justify-center md:items-stretch md:p-[1px_6px] md:w-auto md:h-full lg:p-[0px_6px_0px_4px]"
                  aria-label="Animated transition"
                >
                  <div className="flex flex-col justify-center items-center gap-2.5 w-[38px] h-full bg-white/40 backdrop-blur-sm rounded-[67px] md:w-11 md:h-11 lg:w-[59px] lg:h-[59px]">
                    <span
                      className="text-[28px] leading-9 text-center md:text-[36px] md:leading-11"
                      aria-label="rocket emoji"
                    >
                      🚀
                    </span>
                  </div>
                </div>

                <span className="heading-large text-left text-foreground">
                  Growth
                </span>
              </div>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="paragraph-medium text-center text-muted-foreground">
            Empowering Businesses with a Customizable,
            <br />
            Data-Driven CRM Solution.
          </p>
        </div>

        {/* Call to action buttons */}
        <div className="w-full flex justify-center items-center gap-2 md:gap-4 lg:gap-5">
          <Button
            variant="filled"
            size="lg"
            aria-label="Get started with SaasAble CRM for free"
          >
            <span className="md:hidden">Get Started</span>
            <span className="hidden md:inline lg:inline">
              Get Started - It&apos;s Free Now
            </span>
          </Button>
          <Button
            variant="outlined"
            size="lg"
            aria-label="Explore CRM integrations"
          >
            <span className="md:hidden">Explore</span>
            <span className="hidden md:inline lg:inline">
              Explore our CRM Integrations
            </span>
          </Button>
        </div>
      </div>

      {/* Hero graphics */}
      <div>
        <div className="w-full flex items-center p-6 h-[220px] bg-muted rounded-[24px] md:p-10 md:h-[400px] md:rounded-[32px] lg:px-16 lg:pt-16 lg:pb-0 lg:h-[543px] lg:rounded-[40px]">
          <picture className="w-full h-full">
            <source
              media="(min-width: 1024px)"
              srcSet="/hero-graphics-desktop.png 1x, /hero-graphics-desktop.png 2x"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/hero-graphics-tablet.png 1x, /hero-graphics-tablet.png 2x"
            />
            <img
              src="/hero-graphics-mobile.png"
              srcSet="/hero-graphics-mobile.png 1x, /hero-graphics-mobile.png 2x"
              alt="SaasAble CRM dashboard interface showing analytics and customer management features"
              className="w-full object-cover h-auto md:w-[600px] md:h-[400px] md:object-fill lg:w-[1000px] lg:h-[666.67px] transition-all duration-300 ease-in-out"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>
    </header>
  );
}
