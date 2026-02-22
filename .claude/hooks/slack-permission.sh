#!/bin/bash
# 권한 요청 시 Slack 알림 전송 (Notification > permission_prompt)

# 프로젝트 환경변수 로드
source "$CLAUDE_PROJECT_DIR/.env"

# stdin에서 JSON 읽기
INPUT=$(cat)
MESSAGE=$(echo "$INPUT" | jq -r '.message // "권한 요청이 있습니다."')
CWD=$(echo "$INPUT" | jq -r '.cwd // ""')
PROJECT=$(basename "$CWD")

# Slack 메시지 전송
curl -s -X POST "$SLACK_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d "$(jq -n \
    --arg project "$PROJECT" \
    --arg message "$MESSAGE" \
    '{
      "text": "🔐 *Claude Code 권한 요청*",
      "attachments": [{
        "color": "warning",
        "fields": [
          {"title": "프로젝트", "value": $project, "short": true},
          {"title": "상태", "value": "권한 승인 대기 중", "short": true},
          {"title": "요청 메시지", "value": $message, "short": false}
        ]
      }]
    }'
  )"

exit 0
