# React Custom Calendar Heatmap
## 목표
현재 react-calendar-heatmap에는 svg 요소를 바꾸지 못함. hover되었을 때도 뭔가 액션이 있었으면 좋겠음

## 요구사항
- 오늘을 기준으로 이전 1년의 요소를 생성한다.
- 받은 데이터를 기준으로 5를 나눠 그라데이션을 준다 => 0 이상이면 일단 1단계를 줘야함
- 단계가 주어지면 해당 숫자로나눠 그라데이션을 준다
- 기간이 주어지면 해당 기간에 맞춰서 1년을 생성한다
- 받은 svg가 있다면 해당 요소로 생성하고, 없으면 기본 요소를 렌더링한다
- svg가 hover되면 값을 띄운다 => id 필요 혹은 index 사용

## Props
- level?: number
- endDate: Date
- startDate?: Date

## Plan
- Compound Component Pattern을 활용하여 날짜, 제목 등을 쉽게 선택가능하게
- 환경에 제한적이지 않았으면 좋겠음 React에서도 추후 변경할 것
