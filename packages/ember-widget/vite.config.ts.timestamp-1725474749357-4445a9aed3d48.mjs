// vite.config.ts
import { defineConfig } from "file:///Users/tomdaniel/Documents/Ember%20AI/Software/ember-widget/node_modules/.pnpm/vite@5.4.2_@types+node@22.5.2/node_modules/vite/dist/node/index.js";
import react from "file:///Users/tomdaniel/Documents/Ember%20AI/Software/ember-widget/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_vite@5.4.2_@types+node@22.5.2_/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import dts from "file:///Users/tomdaniel/Documents/Ember%20AI/Software/ember-widget/node_modules/.pnpm/vite-plugin-dts@4.1.0_@types+node@22.5.2_rollup@4.21.2_typescript@5.5.4_vite@5.4.2_@types+node@22.5.2_/node_modules/vite-plugin-dts/dist/index.mjs";
import tailwindcss from "file:///Users/tomdaniel/Documents/Ember%20AI/Software/ember-widget/node_modules/.pnpm/tailwindcss@3.4.10/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "/Users/tomdaniel/Documents/Ember AI/Software/ember-widget/packages/ember-widget";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./lib/index.ts"),
      name: "react-beautiful-timeline",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss"
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  plugins: [react(), dts({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdG9tZGFuaWVsL0RvY3VtZW50cy9FbWJlciBBSS9Tb2Z0d2FyZS9lbWJlci13aWRnZXQvcGFja2FnZXMvZW1iZXItd2lkZ2V0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvdG9tZGFuaWVsL0RvY3VtZW50cy9FbWJlciBBSS9Tb2Z0d2FyZS9lbWJlci13aWRnZXQvcGFja2FnZXMvZW1iZXItd2lkZ2V0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy90b21kYW5pZWwvRG9jdW1lbnRzL0VtYmVyJTIwQUkvU29mdHdhcmUvZW1iZXItd2lkZ2V0L3BhY2thZ2VzL2VtYmVyLXdpZGdldC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwidGFpbHdpbmRjc3NcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9saWIvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcInJlYWN0LWJlYXV0aWZ1bC10aW1lbGluZVwiLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwidGFpbHdpbmRjc3NcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgIHRhaWx3aW5kY3NzOiBcInRhaWx3aW5kY3NzXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxuICBwbHVnaW5zOiBbcmVhY3QoKSwgZHRzKHsgcm9sbHVwVHlwZXM6IHRydWUgfSldLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaWEsU0FBUyxvQkFBb0I7QUFDOWIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFKeEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQzFDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLElBQ3ZDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLGFBQWE7QUFBQSxNQUM5QyxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsYUFBYSxLQUFLLENBQUMsQ0FBQztBQUFBLEVBQzdDLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxXQUFXO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
