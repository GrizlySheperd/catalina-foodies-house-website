import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import heroTable from "@/assets/hero-table.jpg";
import { dishes, formatRM } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Catalina Foodie's House — Sarawak comfort food in Kuching",
      },
      {
        name: "description",
        content:
          "Kolo mee tossed to order, laksa simmered the slow way, kek lapis cut fresh every morning. Browse today's menu and order from our family kitchen.",
      },
      {
        property: "og:title",
        content: "Catalina Foodie's House — Real Sarawak flavours, no queue required",
      },
      {
        property: "og:description",
        content:
          "Kolo mee tossed to order, laksa simmered the slow way, kek lapis cut fresh every morning. Order from our family kitchen in Kuching.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = dishes.slice(0, 3);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="grain relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-12 sm:pt-16 lg:grid-cols-2 lg:gap-14 lg:pb-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-butter px-4 py-1.5 text-sm font-semibold text-butter-foreground shadow-warm">
              Fresh from the wok, every morning
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Real Sarawak flavours,
              <br />
              <span className="text-crust">no queue required.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Catalina Foodie's House brings the kopitiam stalls of Kuching to
              your door — kolo mee tossed to order, laksa simmered the slow way,
              and kek lapis cut fresh every morning.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lift transition-all hover:-translate-y-0.5 hover:bg-crust"
              >
                Order now
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center rounded-full border-2 border-primary/25 bg-card px-7 py-3.5 text-base font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-secondary/40"
              >
                View menu
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-lift ring-8 ring-card">
              <img
                src={heroTable}
                alt="A wooden kopitiam table with bowls of laksa and kolo mee, kek lapis slices and iced teh C peng"
                width={1920}
                height={1080}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 hidden rounded-2xl bg-card px-5 py-3 shadow-warm sm:block">
              <p className="font-display text-sm font-semibold text-foreground">
                Open Tue–Sun · 7am – 2pm
              </p>
              <p className="text-xs text-muted-foreground">
                12 Carpenter Street, Kuching
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Started at a five-table stall on Carpenter Street
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Catalina Foodie's House began in 2019 as a single stall run by two
              sisters who grew up helping in their father's kopitiam. Today we
              still make the noodles fresh each morning and only cook what we
              expect to sell — no freezers, no shortcuts. Every order supports
              the same family kitchen that started it all.
            </p>
          </div>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Straight from the kitchen
            </h2>
            <p className="mt-2 text-muted-foreground">
              A taste of today's menu — see the full spread on the menu page.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-primary/25 bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/50"
          >
            See full menu →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((dish) => (
            <Link
              key={dish.id}
              to="/menu"
              className="group overflow-hidden rounded-3xl bg-card shadow-warm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  width={960}
                  height={720}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {dish.shortName ?? dish.name}
                  </h3>
                  <span className="font-display text-lg font-bold text-crust">
                    {formatRM(dish.price)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {dish.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
