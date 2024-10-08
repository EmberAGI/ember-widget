FROM node:20-alpine as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
COPY package.json ./
COPY ../../pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i --frozen-lockfile
COPY . .
ARG USE_PUBLISHED_PACKAGES
ARG VITE_EMBER_API_KEY
ENV VITE_EMBER_API_KEY=$VITE_EMBER_API_KEY
RUN pnpm run build --use-published-packages=${USE_PUBLISHED_PACKAGES}

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
RUN apk update && apk add --no-cache bash envsubst
COPY --from=base /app/apps/demo/dist .
COPY --from=base /app/apps/demo/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [\
  "/bin/bash", \
  "-c", \
  "envsubst < env-config.template.json > env-config.json && nginx -g \"daemon off;\"" \
]
