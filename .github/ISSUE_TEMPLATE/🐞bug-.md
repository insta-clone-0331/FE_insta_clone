---
name: "\U0001F41EBug "
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

name: 'Bug Report'
description: '버그 리포트'
labels: 'bug'
assignees: ''

body:
  - type: markdown
    attributes:
      value: |
        ## 버그 설명
        발생한 버그가 무엇인지 간단히 설명해주세요.

  - type: input
    attributes:
      label: '버그 설명'
      description: '버그에 대해 상세히 설명해주세요.'
      placeholder: '버그의 발생 상황과 설명을 여기에 작성해주세요.'
      required: true

  - type: input
    attributes:
      label: '재현 방법'
      description: '버그를 재현하는 방법을 단계별로 적어주세요.'
      placeholder: '버그를 재현할 수 있는 단계들을 작성해주세요.'
      required: true

  - type: input
    attributes:
      label: '기기 및 환경'
      description: '버그가 발생한 기기와 소프트웨어 환경을 작성해주세요. (예: OS 버전, 브라우저 버전 등)'
      placeholder: '기기와 환경을 여기에 작성해주세요.'
      required: true

  - type: input
    attributes:
      label: '스크린샷'
      description: '버그를 보여주는 스크린샷이 있다면 첨부해주세요.'
      placeholder: '스크린샷을 첨부해주세요.'
      required: false
