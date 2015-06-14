 #!/bin/bash
source .env; forever -c "node --harmony" --minUptime 1000 --spinSleepTime 1000 -w app.js