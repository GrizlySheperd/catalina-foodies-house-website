import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { dishes, formatRM, type Dish } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Today's Menu — Catalina Foodie's House" },
      {
        name: "description",
        content:
          "Kolo mee, Sarawak laksa, midin belacan, ayam pansuh, kek lapis and teh C peng. Tap Order to build your order — prices from RM 3.50.",
      },
      {
        property: "og:title",
        content: "Today's Menu — Catalina Foodie's House",
      },
      {
        property: "og:description",
        content:
          "Kolo mee, Sarawak laksa, midin belacan, ayam pansuh, kek lapis and teh C peng. Tap Order to build your order.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [order, setOrder] = useState<Record<string, number>>({});
  const [barOpen, setBarOpen] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  const items = useMemo(
    () =>
      Object.entries(order)
        .map(([id, qty]) => {
          const dish = dishes.find((d) => d.id === id);
          return dish ? { dish, qty } : null;
        })
        .filter((x): x is { dish: Dish; qty: number } => x !== null),
    [order],
  );

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.dish.price, 0);

  const addDish = (dish: Dish) => {
    setOrder((o) => ({ ...o, [dish.id]: (o[dish.id] ?? 0) + 1 }));
    setBarOpen(true);
    setFlash(dish.id);
    window.setTimeout(() => setFlash((f) => (f === dish.id ? null : f)), 1400);
  };

  const changeQty = (id: string, delta: number) => {
    setOrder((o) => {
      const next = (o[id] ?? 0) + delta;
      if (next <= 0) {
        const { [id]: _drop, ...rest } = o;
        return rest;
      }
      return { ...o, [id]: next };
    });
  };

  return (
    <main className="flex-1">
      <section className="bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center lg:py-16">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Today's Menu
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tap "Order" to add a dish — your total updates at the bottom of the
            screen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 pb-40 lg:py-16">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => {
            const qty = order[dish.id] ?? 0;
            return (
              <article
                key={dish.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-warm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    width={960}
                    height={720}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {dish.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-butter px-3 py-1 text-xs font-bold text-butter-foreground shadow-warm">
                      {dish.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold leading-snug text-foreground">
                      {dish.shortName ?? dish.name}
                    </h2>
                    <span className="font-display text-xl font-bold text-crust">
                      {formatRM(dish.price)}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {dish.description}
                  </p>
                  <div className="mt-4">
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() => addDish(dish)}
                        className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-colors hover:bg-crust"
                      >
                        Order
                      </button>
                    ) : (
                      <div className="flex items-center justify-between rounded-full bg-secondary/50 px-2 py-1.5">
                        <button
                          type="button"
                          aria-label={`Remove one ${dish.name}`}
                          onClick={() => changeQty(dish.id, -1)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-lg font-bold text-primary shadow-warm transition-colors hover:bg-secondary"
                        >
                          −
                        </button>
                        <span className="text-sm font-semibold text-foreground">
                          {qty} in your order
                        </span>
                        <button
                          type="button"
                          aria-label={`Add one ${dish.name}`}
                          onClick={() => addDish(dish)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-warm transition-colors hover:bg-crust"
                        >
                          +
                        </button>
                      </div>
                    )}
                    <span
                      className={`mt-2 block text-center text-xs font-semibold text-crust transition-opacity duration-300 ${
                        flash === dish.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Added ✓
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Order bar */}
      <div className="fixed inset-x-0 bottom-0 z-40">
        <div className="mx-auto max-w-3xl px-4 pb-4">
          {barOpen && count > 0 && (
            <ul className="mb-2 max-h-64 space-y-2 overflow-y-auto rounded-3xl bg-card p-4 shadow-lift ring-1 ring-border">
              {items.map(({ dish, qty }) => (
                <li key={dish.id} className="flex items-center gap-3">
                  <img
                    src={dish.image}
                    alt=""
                    width={96}
                    height={72}
                    className="h-12 w-16 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-sm font-semibold text-foreground">
                      {dish.shortName ?? dish.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatRM(dish.price)} each
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Remove one ${dish.name}`}
                      onClick={() => changeQty(dish.id, -1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/60 text-sm font-bold text-primary hover:bg-secondary"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm font-semibold">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label={`Add one ${dish.name}`}
                      onClick={() => changeQty(dish.id, +1)}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/60 text-sm font-bold text-primary hover:bg-secondary"
                    >
                      +
                    </button>
                  </div>
                  <span className="w-20 text-right font-display text-sm font-bold text-foreground">
                    {formatRM(dish.price * qty)}
                  </span>
                </li>
              ))}
              <li className="border-t border-border pt-2">
                <button
                  type="button"
                  onClick={() => setOrder({})}
                  className="text-xs font-semibold text-muted-foreground underline-offset-2 hover:text-destructive hover:underline"
                >
                  Clear order
                </button>
              </li>
            </ul>
          )}
          <button
            type="button"
            onClick={() => setBarOpen((o) => !o)}
            className={`flex w-full items-center justify-between rounded-3xl px-6 py-4 text-left shadow-lift transition-colors ${
              count > 0
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground ring-1 ring-border"
            }`}
          >
            <span className="font-display text-base font-bold">
              {count > 0
                ? `${count} ${count === 1 ? "item" : "items"} · ${formatRM(total)}`
                : "Your order is empty — tap Order on a dish"}
            </span>
            {count > 0 && (
              <span className="text-sm font-semibold opacity-80">
                {barOpen ? "Hide ▾" : "Show ▴"}
              </span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
