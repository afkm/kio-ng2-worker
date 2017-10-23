# kio-ng2-worker
web worker for kio ng2 projects

## installation

```bash
npm install github:afkm/kio-ng2-worker
scp ./node_modules/kio-ng2-worker/browser/worker.umd.js ./path/to/assets/worker.js
```

```typescript
import { createClient } from 'kio-ng2-worker'

const workerClient = createClient ( './path/to/assets/worker.js' )
```


