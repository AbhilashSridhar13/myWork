# myWork
This repository is all about my contributions and learnings from my projects.


## Overview
A config-driven metrics dashboard built with React and Recharts.
Handles large datasets efficiently using time-based slicing and downsampling.

## Architecture
- Raw data generated once on app load
- Centralized data processing via `useProcessedMetrics`
- Time-based slicing using timestamps
- Explicit downsampling to limit render cost
- Single reusable chart renderer driven by configuration

- ## Performance
- Avoids rendering raw 100k+ data points
- Uses Nth-point downsampling to cap rendered points
- Memoized data processing to prevent unnecessary recomputation

- ## Trade-offs
- Used downsampling instead of aggregation for simplicity
- Architecture allows aggregation to be added later if needed
- Data is static (snapshot-based), not real-time
