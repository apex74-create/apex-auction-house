# THE FLEET — five positions, one house

The Apex Auction House is not one website. It is a standing set of **five
positions**, so the floor survives the sale of any one property:

| # | Position | State | Spot |
|---|---|---|---|
| 1 | Main Hall | **RUNNING** | repo `apex-auction-house` — https://apex74-create.github.io/apex-auction-house/ |
| 2 | Hall Two | **RUNNING** | repo `apex-auction-house-hall-2` — https://apex74-create.github.io/apex-auction-house-hall-2/ |
| 3 | Hall Three | **RUNNING** | repo `apex-auction-house-hall-3` — https://apex74-create.github.io/apex-auction-house-hall-3/ |
| 4 | The Listed Hall | **FOR SALE** | repo `apex-auction-house-for-sale` — https://apex74-create.github.io/apex-auction-house-for-sale/ — its Lot No. 1 is the house itself: **$4,499 ESTIMATE, reserve $2,999, asking price BLANK (the owner's ruling sets it)** |
| 5 | The Next Hall | **IN ASSEMBLY** | repo `apex-auction-house-next` — a complete staged build, Pages NOT enabled; it carries no live URL until promoted |

## THE REPRODUCTION CALL — what happens the day a sale closes

A sale never shrinks the fleet. When the FOR SALE position (or any running
hall) is sold and handed over, the house runs this call, in order:

1. **Verify the floor still stands:** at least two other RUNNING halls are
   live-verified on their public URLs before the sold hall changes hands.
2. **Promote the IN ASSEMBLY position:** enable Pages on
   `apex-auction-house-next` (or its successor assembly repo), live-verify
   it, and mark it RUNNING. If the sold hall was the listed one, the
   promoted hall becomes the new FOR SALE position and its Lot No. 1 is
   re-cut as the house itself at the then-current worksheet figures.
3. **Call a new build:** stand up the next assembly repo
   (`apex-auction-house-next-2`, then `-3`, and so on) as a complete staged
   copy of the floor with Pages NOT enabled, and mark it IN ASSEMBLY.
4. **Restore the pattern on paper:** update this file and every hall's
   fleet panel to the restored 3 RUNNING / 1 FOR SALE / 1 IN ASSEMBLY set,
   with the sale recorded (date, position sold, price actually paid —
   never an estimate stated as a price).

The pattern is the product: **3 running, 1 for sale, 1 in assembly —
always.** A sale is a reproduction event, not a closing.

## Domain candidate (chosen, not purchased)

`apex-auction-house.com` — no RDAP registration record on Nov 17, 2026;
the fleet-pattern name, held as the chosen candidate for the owner's
end-grade. Registration is the owner's money act; nothing here buys it.
Zero-cost fallback already in the house pattern: a subdomain under a
GoDaddy-held name (e.g. `auction.apexairsolutions.shop`, CNAME to
`apex74-create.github.io`) — wiring needs one DNS record in the owner's
GoDaddy console or a fresh GoDaddy PAT (the API lane reads 401 today).
