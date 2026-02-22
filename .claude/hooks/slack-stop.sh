#!/bin/bash
# 작업 완료 시 Slack 알림 전송 (Stop)

# 프로젝트 환경변수 로드
source "$CLAUDE_PROJECT_DIR/.env"

# stdin에서 JSON 읽기
INPUT=$(cat)
CWD=$(echo "$INPUT" | jq -r '.cwd // ""')
PROJECT=$(basename "$CWD")
STOP_HOOK_ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active // false')

# stop_hook_active가 true이면 무한 루프 방지를 위해 종료
if [ "$STOP_HOOK_ACTIVE" = "true" ]; then
  exit 0
fi

# Slack 메시지 전송
curl -s -X POST "$SLACK_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "$(jq -n \
    --arg project "$PROJECT" \
    --arg timestamp "$(date '+%Y-%m-%d %H:%M:%S')" \
    '{
      "text": "✅ *Claude Code 작업 완료*",
      "attachments": [{
        "color": "good",
        "fields": [
          {"title": "프로젝트", "value": $project, "short": true},
          {"title": "상태", "value": "응답이 완료되었습니다.", "short": true},
          {"title": "완료 시간", "value": $timestamp, "short": true}
        ]
      }]
    }'
  )"

exit 0
