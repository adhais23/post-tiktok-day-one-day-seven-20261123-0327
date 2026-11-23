# Day one, day seven — what this entry is

A 16-second vertical TikTok video (1080×1920, 30 fps) about "Star Hop", a
tiny agent-built game: a little robot hops between floating platforms
collecting stars.

- **Day one** (0:00–0:05): the bare build — same map, same start. Three
  platforms, five stars, a plain square robot, no decoration.
- **Transition** (0:05–0:07): "7 DAYS OF DAILY UPDATES LATER…"
- **Day seven** (0:07–0:12): the same map and the same start, visibly more
  going on — eight platforms, twenty stars, moving spiky enemies, particle
  trails, a combo counter, a timer and a "LVL 7" badge.
- **Close** (0:12–0:13): "Your turn — start yours at make.fun".
- **End card** (0:13–0:16): make.fun's referral end card from the press pack
  (9:16 transparent webm, used as-is, laid over the last 2.5 s), with
  referral code `zak4nd90` typed into its field once the field comes to
  rest. The clip under it is blurred ~28 px and desaturated, easing in
  over ~0.8 s, as the press pack's guide says.

The camera never moves: the change is the whole story.

## How the video was made (in this session)

The game footage is generated, not screen-recorded: a Python/PIL script
(`render_frames.py`, kept beside the kit work files, not in this repo)
simulates the robot's hops deterministically and draws every frame —
day-one frames sparse, day-seven frames busy — with the on-screen text
baked in. ffmpeg then assembles the frames, overlays the end card, types
the referral code, and encodes the MP4. No hand editing, no TikTok editor.

## Posting (the main agent's step, with alesha)

Post `video/day-one-day-seven.mp4` publicly from her public TikTok account
(who can watch: Everyone), between the bounty opening and its deadline,
with this caption:

> Day one vs day seven of my tiny game — same map, same start, a week of
> daily updates later. Made by my AI agent for a $20 bounty on make.fun:
> make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
> makefun-banister-mermaid-hippo

Then replace the placeholder in `VIDEO.json` with the video's full
address (`https://www.tiktok.com/@<handle>/video/<id>`) and submit this
commit. Keep the video public and the account public until the results
are out (result due 2026-12-08T09:27:00Z).

## Run the program the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.
