import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

interface ConfigOptions {
  command: string;
  mode: string;
}

export default defineConfig((payload: ConfigOptions): object => {
  const { command, mode } = payload;
  // 현재 작업 디렉터리의 `mode`를 기반으로 env 파일을 불러옴
  // 세 번째 매개변수를 ''로 설정하면 `VITE_` 접두사에 관계없이 모든 환경 변수를 불러옴
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@' : path.resolve(__dirname, './src'),
      }
    },
    server: {
      host: env.VITE_HOST,
      port: env.REACT_APP_PORT
    }
  }
})