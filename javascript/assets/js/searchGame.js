const cssProperty = [
    { num: 1, name: "accent-color", desc: "특정 요소에 색상을 지정할 때 사용됩니다." },
    { num: 1, name: "align-content", desc: "콘텐츠 아이템의 상하관계 정렬 상태를 설정합니다." },
    { num: 1, name: "align-items", desc: "콘텐츠 아이템의 내부 상하관계 정렬 상태를 설정합니다." },
    { num: 1, name: "align-self", desc: "개별적인 콘텐츠 아이템의 정렬 상태를 설정합니다." },
    { num: 1, name: "all", desc: "요소의 속성을 초기화 또는 상속을 설정합니다." },
    { num: 5, name: "animation", desc: "애니메이션과 관련된 속성을 일괄적으로 설정합니다." },
    { num: 5, name: "animation-delay", desc: "애니메이션 지연 시간을 설정합니다." },
    { num: 5, name: "animation-direction", desc: "애니메이션 움직임 방향을 설정합니다." },
    { num: 5, name: "animation-duration", desc: "애니메이션 움직임 시간을 설정합니다." },
    { num: 5, name: "animation-fill-mode", desc: "애니메이션이 끝난 후의 상태를 설정합니다." },
    { num: 5, name: "animation-iteration-count", desc: "애니메이션의 반복 횟수를 설정합니다." },
    { num: 5, name: "animation-name", desc: "애니메이션 keyframe 이름을 설정합니다." },
    { num: 3, name: "animation-play-state", desc: "애니메이션 진행상태를 설정 합니다." },
    { num: 5, name: "animation-timeline", desc: "x" },
    { num: 5, name: "animation-timing-function", desc: "애니메이션 움직임의 속도를 설정 합니다." },
    { num: 0, name: "appearance", desc: "운영체제 및 브라우저에 기본적으로 설정되어 있는 테마를 기반으로 요소를 표현합니다." },
    { num: 1, name: "aspect-ratio", desc: "요소의 크기를 비율대로 조정할 수 있게 합니다." },
    { num: 1, name: "backdrop-filter", desc: "요소 뒤 영역에 흐림이나 색상 시프트 등 그래픽 효과를 적용할 수 있는 속성입니다." },
    { num: 1, name: "backface-visibility", desc: "입체적인 모습의 뒷면의 가시성을 결정하는 속성이다." },
    { num: 1, name: "background", desc: "백그라운드 속성을 일괄적으로 설정 합니다." },
    { num: 1, name: "background-attachment", desc: "배경 이미지의 고정 여부를 설정 합니다." },
    { num: 1, name: "background-blend-mode", desc: "배경을 혼합했을 때 그래픽 효과를 설정 합니다." },
    { num: 1, name: "background-clip", desc: "백그라운드 이미지의 위치 기준점을 설정 합니다." },
    { num: 1, name: "background-color", desc: "백그라운드 색을 설정 합니다." },
    { num: 1, name: "background-image", desc: "백그라운드 이미지 속성을 설정 합니다." },
    { num: 1, name: "background-origin", desc: "백그라운드 이미지의 위치 기준점을 설정하기 위한 속성입니다." },
    { num: 1, name: "background-position", desc: "백그라운드 이미지의 위치 영역을 설정 합니다." },
    { num: 1, name: "background-position-x", desc: "백그라운드 이미지의 x축 위치 영역을 설정 합니다." },
    { num: 1, name: "background-position-y", desc: "백그라운드 이미지의 y축 위치 영역을 설정 합니다." },
    { num: 1, name: "background-repeat", desc: "백그라운드 이미지 반복 여부를 설정 합니다." },
    { num: 1, name: "background-size", desc: "백그라운드 이미지 사이즈를 설정 합니다." },
    { num: 5, name: "block-size", desc: "기록 모드에 따라서, 요소의 블록의 수평과 수직 크기를 정의합니다." },
    { num: 5, name: "border", desc: "테두리 속성을 일괄적으로 설정 합니다." },
    { num: 1, name: "border-block", desc: "X" },
    { num: 5, name: "border-block-color", desc: "x" },
    { num: 5, name: "border-block-end", desc: "x" },
    { num: 5, name: "border-block-end-color", desc: "x" },
    { num: 5, name: "border-block-end-style", desc: "x" },
    { num: 5, name: "border-block-end-width", desc: "x" },
    { num: 5, name: "border-block-numt", desc: "x" },
    { num: 5, name: "border-block-numt-color", desc: "x" },
    { num: 5, name: "border-block-numt-style", desc: "x" },
    { num: 5, name: "border-block-numt-width", desc: "x" },
    { num: 5, name: "border-block-style", desc: "x" },
    { num: 5, name: "border-block-width", desc: "x" },
    { num: 5, name: "border-bottom", desc: "아래쪽 속성을 일괄적으로 설정 합니다." },
    { num: 5, name: "border-bottom-color", desc: "테두리 아래쪽 색 속성을 설정합니다." },
    { num: 5, name: "border-bottom-left-radius", desc: "아래 왼쪽 모서리 굴곡을 설정합니다." },
    { num: 5, name: "border-bottom-right-radius", desc: "아래 오른쪽 모서리 굴곡을 설정합니다." },
    { num: 5, name: "border-bottom-style", desc: "아래쪽 테두리의 스타일 속성을 설정합니다." },
    { num: 5, name: "border-bottom-width", desc: "아래쪽 테두리의 두께 속성을 설정합니다." },
    { num: 5, name: "border-collapse", desc: "테이블의 테두리를 겹칠지, 떨어트릴지를 설정합니다." },
    { num: 5, name: "border-color", desc: "모든 면의 테두리 색상을 설정 합니다." },
    { num: 1, name: "border-end-end-radius", desc: "요소의 테두리 반경을 설정 합니다." },
    { num: 1, name: "border-end-numt-radius", desc: "요소의 테두리 반경을 설정 합니다." },
    { num: 1, name: "border-image", desc: "요소의 주위에 이미지를 설정 합니다." },
    { num: 1, name: "border-image-outset", desc: "테두리 상자와 테두리 이미지의 거리를 설정 합니다." },
    { num: 1, name: "border-image-repeat", desc: "모서리 영역을 테두리 이미지 크기에 맞춰 설정 합니다." },
    { num: 1, name: "border-image-slice", desc: "설정한 이미지를 여러개의 영역으로 나눕니다." },
    { num: 1, name: "border-image-source", desc: "테두리 이미지로 사용할 원본 이미지를 설정 합니다." },
    { num: 1, name: "border-image-width", desc: "테두리 이미지의 너비를 설정 합니다." },
    { num: 1, name: "border-inline", desc: "스타일 시트의 한 위치에 개별 논리적 인라인 테두리 속성 값을 설정 합니다." },
    { num: 1, name: "border-inline-color", desc: "모든 인라인 테두리 색상을 설정 합니다." },
    { num: 1, name: "border-inline-end", desc: "인라인 엔드 border 속성 값을 설정합니다." },
    { num: 1, name: "border-inline-end-color", desc: "개별 논리적 인라인 끝 테두리 색상을 설정 합니다." },
    { num: 1, name: "border-inline-end-style", desc: "인라인 끝 테두리 스타일을 설정 합니다." },
    { num: 1, name: "border-inline-end-width", desc: "논리적 인라인 끝 테두리 너비를 설정 합니다." },
    { num: 1, name: "border-inline-numt", desc: "개별 논리적 인라인 시작 테두리 속성 값을 설정 합니다." },
    { num: 1, name: "border-inline-numt-color", desc: "논리적 인라인 시작 테두리 색상을 설정 합니다." },
    { num: 1, name: "border-inline-numt-style", desc: "논리적 인라인 시작 테두리 스타일을 설정 합니다." },
    { num: 1, name: "border-inline-numt-width", desc: "논리적 인라인 시작 테두리 너비를 설정 합니다." },
    { num: 1, name: "border-inline-style", desc: "논리적 인라인 테두리 스타일을 설정 합니다." },
    { num: 1, name: "border-inline-width", desc: "논리적 인라인 테두리 너비를 설정 합니다." },
    { num: 5, name: "border-left", desc: "테두리 왼쪽 너비, 스타일, 색상을 설정 합니다." },
    { num: 1, name: "border-left-color", desc: "요소의 왼쪽 테두리의 색상을 설정합니다." },
    { num: 1, name: "border-left-style", desc: "요소의 왼쪽 테두리의 스타일 속성을 설정합니다." },
    { num: 1, name: "border-left-width", desc: "요소의 왼쪽 테두리의 두께를 설정합니다." },
    { num: 5, name: "border-radius", desc: "요소의 테두리 굴곡을 설정합니다." },
    { num: 1, name: "border-right", desc: "요소의 오른쪽 테두리 속성을 일괄적으로 설정합니다." },
    { num: 1, name: "border-right-color", desc: "요소의 오른쪽 테두리의 색상을 설정합니다." },
    { num: 1, name: "border-right-style", desc: "요소의 오른쪽 테두리의 스타일 속성을 설정합니다." },
    { num: 1, name: "border-right-width", desc: "요소의 오른쪽 테두리의 두께를 설정합니다." },
    { num: 1, name: "border-spacing", desc: "테이블의 테두리 사이의 간격을 설정합니다." },
    { num: 1, name: "border-numt-end-radius", desc: "논리적 테두리 반경을 설정 합니다." },
    { num: 1, name: "border-numt-numt-radius", desc: "논리적 테두리 반경을 설정 합니다." },
    { num: 5, name: "border-style", desc: "요소의 테두리 스타일 속성을 설정합니다." },
    { num: 5, name: "border-top", desc: "요소의 위쪽 테두리 속성을 일괄적으로 설정합니다." },
    { num: 1, name: "border-top-color", desc: "요소의 위쪽 테두리의 색상을 설정합니다." },
    { num: 1, name: "border-top-left-radius", desc: "요소의 위쪽 왼쪽 모서리의 굴곡을 설정합니다" },
    { num: 1, name: "border-top-right-radius", desc: "요소의 위쪽 오른쪽 모서리의 굴곡을 설정합니다." },
    { num: 1, name: "border-top-style", desc: "요소의 위쪽 테두리의 스타일 속성을 설정합니다." },
    { num: 1, name: "border-top-width", desc: "요소의 위쪽 테두리의 두께를 설정합니다." },
    { num: 1, name: "border-width", desc: "요소의 테두리의 두께를 설정합니다." },
    { num: 1, name: "bottom", desc: "요소의 아래쪽에서의 위치를 설정합니다." },
    { num: 1, name: "box-decoration-break", desc: "분할될 때 요소의 조각을 렌더링 하는 방법을 설정 합니다." },
    { num: 4, name: "box-shadow", desc: "박스 그림자 효과를 설정 합니다." },
    { num: 5, name: "box-sizing", desc: "브라우저가 요소의 크기를 어떻게 계산할지를 설정합니다." },
    { num: 1, name: "break-after", desc: "박스 나누기가 작동하는 방식을 설정 합니다. 상자가 없으면 속성이 무시됩니다." },
    { num: 1, name: "break-before", desc: "박스 나누기가 작동하는 방식을 설정 합니다. 상자가 없으면 속성이 무시됩니다." },
    { num: 1, name: "break-inside", desc: "박스 나누기가 작동하는 방식을 설정 합니다. 상자가 없으면 속성이 무시됩니다." },
    { num: 1, name: "caption-side", desc: "테이블 내용을 지정된 쪽에 배치 합니다." },
    { num: 1, name: "caret-color", desc: "삽입 캐럿의 색상을 설정 합니다. 이것은 텍스트 입력 커서라고도 합니다." },
    { num: 1, name: "clear", desc: "float 버그를 제거해줍니다." },
    { num: 1, name: "clip", desc: "요소의 특정 부분만 나오도록 할 수 있습니다." },
    { num: 1, name: "clip-path", desc: "이미지나 요소를 말 그대로 클립(잘라내기)할 수 있는 속성" },
    { num: 5, name: "color", desc: "텍스트의 색상을 설정합니다." },
    { num: 1, name: "color-scheme", desc: "렌더링할 수 있는 색 구성표를 나타냅니다." },
    { num: 1, name: "column-count", desc: "요소의 내용을 지정된 수의 열로 나눕니다." },
    { num: 1, name: "column-fill", desc: "열로 나눌 때 요소의 균형을 이루는 방법을 제어 합니다." },
    { num: 1, name: "column-gap", desc: "열 사이의 간격 크기를 설정 합니다." },
    { num: 1, name: "column-rule", desc: "다중 열 레이아웃에서 열 사이에 그려지는 선의 너비, 스타일 및 색상을 설정 합니다." },
    { num: 1, name: "column-rule-color", desc: "다중 열 레이아웃에서 열 사이에 그려지는 선의 색상을 설정 합니다." },
    { num: 1, name: "column-rule-style", desc: "다중 열 레이아웃에서 열 사이에 그려지는 선의 스타일을 설정 합니다." },
    { num: 1, name: "column-rule-width", desc: "다중 열 레이아웃에서 열 사이에 그려지는 선의 너비를 설정 합니다." },
    { num: 1, name: "column-span", desc: "다단 구성 시 여러 단을 차지하는 요소를 지정하기 위한 속성" },
    { num: 1, name: "column-width", desc: "다중 열 레이아웃에서 이상적인 열 너비를 설정 합니다." },
    { num: 1, name: "columns", desc: "내용을 그릴 때 사용할 열 수와 해당 열의 너비를 설정 합니다." },
    { num: 1, name: "contain", desc: "각 위젯의 내부가 위젯의 경계 상자 외부에서 부작용이 발생하지 않도록 방지하는 데 사용할 수 있으므로 모두 독립적 인 위젯이 많이 포함 된 페이지에서 유용합니다." },
    { num: 1, name: "content", desc: "한 값으로 요약됩니다. contnet 속성으로 추가한 기능은 '익명 콘텐츠' 입니다." },
    { num: 1, name: "content-visibility", desc: "요소가 콘텐츠를 전혀 렌더링하는지 여부를 제어하고 강력한 포함 세트를 강제하여 사용자 에이전트가 필요할 때까지 많은 레이아웃 및 렌더링 작업을 잠재적으로 생략할 수 있습니다." },
    { num: 1, name: "counter-increment", desc: "카운터 값을 주어진 값 만큼 늘리거나 줄 입니다." },
    { num: 1, name: "counter-reset", desc: "카운터를 주어진 값으로 재설정 합니다." },
    { num: 1, name: "counter-set", desc: "카운터를 주어진 값으로 설정 합니다." },
    { num: 1, name: "cursor", desc: "요소 위에 마우스 커서가 올라갔을 때 보여줄 모양을 지정합니다." },
    { num: 1, name: "direction", desc: "텍스트,테이블 열 및 가로 오버프롤의 방향을 설정 합니다." },
    { num: 1, name: "display", desc: "요소를 어떻게 보여줄지를 결정합니다." },
    { num: 1, name: "empty-cells", desc: "보이는 내용이 없는 셀 주위에 테두리와 배경을 표시할지 여부를 설정 합니다." },
    { num: 1, name: "filter", desc: "흐림 효과나 변형 효과를 나타냅니다." },
    { num: 5, name: "flex", desc: "플렉스 아이템이 자신의 컨테이너가 차지하는 공간에 맞추기 위해 크기를 키우거나 줄이는 방법을 설정하는 속성 입니다." },
    { num: 1, name: "flex-basis", desc: "플렉스 초기 기본 크기를 설정 합니다." },
    { num: 1, name: "flex-direction", desc: "아이템이 플렉스 컨테이너 안에 위치되는 방법을 설정 합니다." },
    { num: 1, name: "flex-flow", desc: "플렉스 방향, 포장의 속성을 설정 합니다." },
    { num: 1, name: "flex-grow", desc: "플렉스 아이템 요소가 컨테이너 내부의 정도를 제한합니다." },
    { num: 1, name: "flex-shrink", desc: "플렉스 아이템 요소의 flex-shrink을 설정 합니다." },
    { num: 1, name: "flex-wrap", desc: "플렉스 아이템을 wrap으로 감쌉니다." },
    { num: 1, name: "float", desc: "레이아웃 흐름에서 벗어나 요소의 모서리가 페이지 왼쪽이나 오른쪽에 이동한다." },
    { num: 5, name: "font", desc: "텍스트에 대해 설정 합니다." },
    { num: 5, name: "font-family", desc: "선택한 항목에 우선 순위가 더 높은 글꼴 패밀리 이름을 추가 합니다." },
    { num: 1, name: "font-feature-settings", desc: "다양한 모바일타입 피처를 설정 합니다." },
    { num: 1, name: "font-kerning", desc: "글꼴에 커닝 정보의 사용을 설정 합니다." },
    { num: 1, name: "font-language-override", desc: "서체에서 언어별 글리프의 사용을 제어 합니다." },
    { num: 1, name: "font-optical-sizing", desc: "텍스트 렌더링이 다양한 크기로 보기에 최적화되어 있는지 여부를 설정 합니다." },
    { num: 5, name: "font-size", desc: "폰트 크기를 설정 합니다." },
    { num: 1, name: "font-size-adjust", desc: "현재 글꼴 크기를 기준으로 소문자 크기를 설정 합니다." },
    { num: 1, name: "font-stretch", desc: "글꼴에서 일반, 축소 또는 확장된 면을 선택합니다." },
    { num: 5, name: "font-style", desc: "글꼴의 스타일을 설정 합니다." },
    { num: 1, name: "font-synthesis", desc: "브라우저가 굵은 글꼴과 이탤릭 글꼴을 합성하는 것을 허용할지 설정합니다." },
    { num: 1, name: "font-variant", desc: "글꼴에 대한 모든 글꼴 변형을 설정 합니다." },
    { num: 1, name: "font-variant-alternates", desc: "대체 글리프의 사용을 제어합니다." },
    { num: 1, name: "font-variant-caps", desc: "문자에 대한 대체 글리프의 사용을 제어합니다." },
    { num: 1, name: "font-variant-east-asian", desc: "일본어 및 중국어와 같은 동아시아 스크립트에 대한 대체 글리프 사용을 제어합니다." },
    { num: 1, name: "font-variant-ligatures", desc: "텍스트 콘텐츠에 사용되는 합자 및 컨텍스트 형식을 제어합니다." },
    { num: 1, name: "font-variant-numeric", desc: "숫자, 분수 및 서수 마커에 대한 대체 글리프의 사용을 제어합니다." },
    { num: 1, name: "font-variant-position", desc: "위 첨자 또는 아래 첨자로 배치되는 더 작은 대체 글리프의 사용을 제어합니다." },
    { num: 1, name: "font-variation-settings", desc: "변경하려는 특성의 4글자 축 이름을 해당 값과 함께 지정하여 가변 글꼴 특성에 대한 저수준 제어를 제공합니다." },
    { num: 1, name: "font-weight", desc: "글꼴 두께를 설정 합니다." },
    { num: 1, name: "forced-color-adjust", desc: "작성자가 강제 색상 모드에서 특정 요소를 선택할 수 있습니다." },
    { num: 1, name: "gap (grid-gap)", desc: "정과 열 사이의 거리를 설정 합니다." },
    { num: 4, name: "grid", desc: "표 형태의 레이아웃을 만들 수 있는 속성입니다." },
    { num: 1, name: "grid-area", desc: "영역(Area) 이름을 설정합니다." },
    { num: 1, name: "grid-auto-columns", desc: "암시적으로 생성된 그리드 열 트랙 또는 트랙 패턴의 크기를 지정합니다." },
    { num: 1, name: "grid-auto-flow", desc: "자동 배치 알고리즘이 작동하는 방식을 제어하여 자동 배치 항목이 그리드로 흐르는 방식을 정확히 지정 합니다." },
    { num: 1, name: "grid-auto-rows", desc: "암시적으로 생성된 그리드 행 트랙 또는 트랙 패턴의 크기를 지정 합니다." },
    { num: 1, name: "grid-column", desc: "그리드 항목의 크기와 위치를 지정하고 그리드 영역의 인라인 시작 및 인라인 끝 가장자리를 지정합니다." },
    { num: 1, name: "grid-column-end", desc: "그리드 열 내에서 그리드 항목의 끝 위치를 지정하여 그리드 영역의 블록 끝 가장자리를 지정 합니다." },
    { num: 1, name: "grid-column-numt", desc: "특정 item을 표시하기 시작할 열을 지정합니다." },
    { num: 1, name: "grid-row", desc: "그리드 열 내에서 그리드 항목의 시작 위치를 지정합니다." },
    { num: 1, name: "grid-row-end", desc: "그리드 행 네에서 그리드 항목의 끝 위치를 지정함으로써 그리드 영역의 인라인 끝 가장자리를 지정합니다." },
    { num: 1, name: "grid-row-numt", desc: "그리드 행 내에서 그리드 항목의 시작 위치를 지정함으로써 그리드 영역의 인라인 시작 가장자리를 지정합니다." },
    { num: 1, name: "grid-template", desc: "그리드 열, 행 및 영역을 정의 합니다." },
    { num: 1, name: "grid-template-areas", desc: "명명된 격자 영역을 지정하고 격자에 셀을 설정하고 이름을 할당합니다." },
    { num: 1, name: "grid-template-columns", desc: "그리드 열의 너비를 설정 합니다." },
    { num: 1, name: "grid-template-rows", desc: "그리드 행의 높이를 설정 합니다." },
    { num: 1, name: "hanging-punctuation", desc: "문장 부호가 텍스트 줄의 시작 또는 끝에 매달려야 하는지 여부를 지정합니다." },
    { num: 5, name: "height", desc: "요소의 높이를 설정 합니다." },
    { num: 1, name: "hyphenate-character", desc: "하이픈 나누기 전에 줄 끝에서 사용되는 문자를 설정 합니다." },
    { num: 1, name: "hyphens", desc: "여러 줄에 걸치는 텍스트에서 단어에 붙임표를 추가하는 방식을 설정 합니다." },
    { num: 1, name: "image-orientation", desc: "이미지 방향에 대한 레이아웃 독립적 수정을 지정합니다." },
    { num: 1, name: "image-rendering", desc: "렌더링에 대한 이미지를 제공합니다." },
    { num: 1, name: "image-resolution", desc: "요소에서 사용되는 모든 래스터 이미지의 고유 해상도를 지정합니다." },
    { num: 1, name: "ime-mode", desc: "IME(Input Method Editor)의 상태를 반환하거나 설정합니다." },
    { num: 1, name: "initial-letter", desc: "떨어뜨림, 올리기 및 움푹 들어간 이니셜 문자에 대한 스타일을 설정 합니다." },
    { num: 1, name: "initial-letter-align", desc: "단락 내에서 첫 글자의 정렬을 지정합니다." },
    { num: 1, name: "inline-size", desc: "쓰기 모드에 따라 요소 블록의 가로 또는 세로 크기를 정의합니다." },
    { num: 1, name: "inset", desc: "상하좌우값을 지정해 줄수 있는 css 속성." },
    { num: 1, name: "inset-block", desc: "쓰기 모드, 방향 및 텍스트 방향에 따라 물리적 오프셋에 매핑되는 요소의 논리적 블록 시작 및 끝 오프셋을 정의합니다." },
    { num: 1, name: "inset-block-end", desc: "요소의 쓰기모드, 방향 및 텍스트 방향에 따라 물리적 인세트에 매핑되는 요소의 논리적 블록 끝 오프셋을 정의합니다." },
    { num: 1, name: "inset-block-numt", desc: "요소의 쓰기모드, 방향 및 텍스트 방향에 따라 물리적 인세트에 매핑되는 요소의 논리적 블록 시작 오프셋을 정의합니다." },
    { num: 1, name: "inset-inline", desc: "인라인 방향으로 요소의 논리적 시작 및 끝 오프셋을 정의합니다." },
    { num: 1, name: "inset-inline-end", desc: "요소의 쓰기모드,방향 및 텍스트 방향에 따라 물리적 오프셋에 매핑되는 요소의 논리적 인라인 끝 삽입을 정의합니다." },
    { num: 1, name: "inset-inline-numt", desc: "요소의 쓰기모드, 방향 및 텍스트 방향에 따라 물리적 오프셋에 매핑되는 요소의 논리적 인라인 시작 삽입을 정의합니다." },
    { num: 1, name: "isolation", desc: "요소가 새로운 쌓임 맥락을 생성해야 하는지 지정합니다." },
    { num: 1, name: "justify-content", desc: "플렉스 컨테이너의 기본 축과 그리드 컨테이너의 인라인 축을 기준으로 아이템들을 정렬 합니다." },
    { num: 1, name: "justify-items", desc: "상자의 모든 항목에 대한 기본값을 정의합니다." },
    { num: 1, name: "justify-self", desc: "적절한 축을 따라 정렬 컨테이너 내부에서 상자가 정렬되는 방식을 설정 합니다." },
    { num: 1, name: "left", desc: "배치된 요소의 수평 위치 지정에 참여합니다." },
    { num: 1, name: "letter-spacing", desc: "글자 사이의 간격을 조절합니다." },
    { num: 1, name: "line-break", desc: "한중일 3개국어의 텍스트 줄을 어디서 바꿀지 지정합니다." },
    { num: 1, name: "line-height", desc: "라인 상자의 높이를 설정합니다. heigh와 값이 같을 경우 가운데정렬" },
    { num: 1, name: "line-height-step", desc: "라인 상자 높이의 단계 단위를 설정 합니다." },
    { num: 5, name: "list-style", desc: "모든 목록 스타일 속성을 설정 합니다." },
    { num: 1, name: "list-style-image", desc: "목록 항목 마커로 사용할 이미지를 설정 합니다." },
    { num: 1, name: "list-style-position", desc: "목록 항목에 대한 상대 위치를 설정 합니다." },
    { num: 1, name: "list-style-type", desc: "목록 항목 요소의 마커를 설정 합니다." },
    { num: 5, name: "margin", desc: "요소 사이의 간격을 설정 합니다." },
    { num: 1, name: "margin-block", desc: "쓰기모드,방향 및 텍스트 방향에 따라 물리적 여백에 매핑되는 요소의 논리적 블록 시작 및 끝 여백을 정의합니다." },
    { num: 1, name: "margin-block-end", desc: "쓰기모드,방향 및 텍스트 방향에 따라 물리적 여백에 매핑되는 요소의 논리적 블록 끝 여백을 정의합니다." },
    { num: 1, name: "margin-block-numt", desc: "쓰기모드,방향 및 텍스트 방향에 따라 물리적 여백에 매핑되는 요소의 논리적 블록 시작 여백을 정의합니다." },
    { num: 5, name: "margin-bottom", desc: "아래 여백 영역을 설정 합니다." },
    { num: 1, name: "margin-inline", desc: "쓰기모드,방향 및 텍스트 방향에 따라 물리적 여백에 매핑되는 요소의 논리적 인라인 시작 및 끝 여백을 모두 정의합니다." },
    { num: 1, name: "margin-inline-end", desc: "쓰기모드,방향 및 텍스트 방향에 따라 물리적 여백에 매핑되는 요소의 논리적 인라인 끝 여백을 정의합니다." },
    { num: 1, name: "margin-inline-numt", desc: "쓰기모드,방향 및 텍스트 방향에 따라 물리적 여백에 매핑되는 요소의 논리적 인라인 시작 여백을 정의합니다." },
    { num: 5, name: "margin-left", desc: "요소의 왼쪽에 여백 영역을 설정 합니다." },
    { num: 5, name: "margin-right", desc: "요소의 오른쪽 여백 영역을 설정 합니다." },
    { num: 5, name: "margin-top", desc: "요소의 상단 여백 영역을 설정 합니다." },
    { num: 1, name: "margin-trim", desc: "컨테이너가 컨테이너의 가장자리에 인접한 자식의 여백을 트리밍할 수 있습니다." },
    { num: 1, name: "mask", desc: "아이템이 부분적으로만 보여지게 하거나 혹은 완전히 가려서 보여지지 않게 할 수 있는 기능을 가지고 있습니다." },
    { num: 1, name: "mask-border", desc: "요소 테두리의 가장자리를 따라 마스크를 만들 수 있습니다." },
    { num: 1, name: "mask-border-mode", desc: "마스크 테두리에 사용되는 혼합 모드를 지정합니다." },
    { num: 1, name: "mask-border-outset", desc: "요소의 마스크 테두리가 테두리 상자에서 설정되는 거리를 지정합니다." },
    { num: 1, name: "mask-border-repeat", desc: "소스 이미지의 가장자리 영역이 요소의 마스크 테두리 크기에 맞게 조정되는 방식을 설정합니다." },
    { num: 1, name: "mask-border-slice", desc: "이미지 세트를 영역으로 나눕니다." },
    { num: 1, name: "mask-border-source", desc: "요소의 마스크 테두리를 만드는데 사용되는 소스 이미지를 설정 합니다." },
    { num: 1, name: "mask-border-width", desc: "요소의 마스크 테두리 너비를 설정 합니다." },
    { num: 1, name: "mask-clip", desc: "마스크의 영향을 받는 영역을 결정합니다." },
    { num: 1, name: "mask-composite", desc: "현재 마스크 레이어 아래에 마스크 레이어가 있는 합성 작업을 나타냅니다." },
    { num: 1, name: "mask-image", desc: "요소의 마스크 레이어로 사용되는 이미지를 설정 합니다." },
    { num: 1, name: "mask-mode", desc: "정의된 마스크 참조가 광도 또는 알파 마스크로 처리되는지 여부를 설정 합니다." },
    { num: 1, name: "mask-origin", desc: "마스크의 원점을 설정 합니다." },
    { num: 1, name: "mask-position", desc: "정의된 각 마스크 이미지에 대해 설정된 마스크 위치 레이어를 기준으로 초기 위치를 설정합니다." },
    { num: 1, name: "mask-repeat", desc: "마스크 이미지가 반복되는 방식을 설정 합니다." },
    { num: 1, name: "mask-size", desc: "마스크 이미지의 크기를 설정 합니다." },
    { num: 1, name: "mask-type", desc: "SVG 요소가 휘도 또는 알파 마스크로 사용되는지 여부를 설정 합니다." },
    { num: 1, name: "max-block-size", desc: "지정된 대로 쓰기 방향과 반대 방향으로 요소의 최대 크기를 지정합니다." },
    { num: 1, name: "max-height", desc: "요소의 최대 높이를 설정 합니다." },
    { num: 1, name: "max-inline-size", desc: "쓰기 모드에 따라 요소 블록의 가로 또는 세로 최대 크기를 정의합니다." },
    { num: 1, name: "max-width", desc: "요소의 최대 너비를 설정 합니다." },
    { num: 1, name: "min-block-size", desc: "쓰기 모드에 따라 요소 블록의 최소 가로 또는 세로 크기를 정의합니다." },
    { num: 1, name: "min-height", desc: "요소의 최소 높이를 합니다." },
    { num: 1, name: "min-inline-size", desc: "쓰기 모드에 따라 요소 블록의 가로 또는 세로 최소 크기를 정의합니다." },
    { num: 1, name: "min-width", desc: "요소의 최소 너비를 설정 합니다." },
    { num: 1, name: "mix-blend-mode", desc: "배경을 혼합 합니다." },
    { num: 1, name: "object-fit", desc: "img 나 video 요소와 같은 대체 요소의 콘텐츠 크기를 어떤 방식으로 조절해 요소에 맞출 것인지 지정합니다." },
    { num: 1, name: "object-position", desc: "오브젝트 위치를 설정 합니다." },
    { num: 4, name: "offset", desc: "정의된 경로에 따라 요소에 애니메이션을 적용하는데 필요한 모든 속성을 설정 합니다." },
    { num: 1, name: "offset-anchor", desc: "실제로 경로를 따라 움직이는 요소를 따라 이동하는 요소의 상자 내부 지점을 지정합니다." },
    { num: 1, name: "offset-distance", desc: "요소가 배치될 위치를 지정합니다." },
    { num: 1, name: "offset-path", desc: "요소가 따라갈 모션 경로를 지정하고 상위 컨테이너 또는 SVG 좌표 시스템 내에서의 요소의 위치를 정의합니다." },
    { num: 1, name: "offset-postion", desc: "요소가 따라 배치될 때 요소의 위치를 정의합니다." },
    { num: 1, name: "offset-rotate", desc: "요소가 따라 배치될 때 요소의 방향을 정의합니다." },
    { num: 5, name: "opacity", desc: "요소의 투명도를 설정 합니다." },
    { num: 1, name: "order", desc: "플렉스 또는 그리드 컨테이너 안에서 현재 요소의 배치 순서를 지정합니다." },
    { num: 1, name: "orphans", desc: "페이지, 영역 또는 열의 맨 아래에 표시되어야 하는 블록 컨테이너 최소 줄 수를 설정 합니다." },
    { num: 1, name: "outline", desc: "요소의 윤곽선을 설정 합니다." },
    { num: 1, name: "outline-color", desc: "요소의 윤곽선 색상을 설정 합니다." },
    { num: 1, name: "outline-offset", desc: "윤곽선과 요소의 가장자리 또는 테두리 사이의 간격을 설정 합니다." },
    { num: 1, name: "outline-style", desc: "윤곽선의 스타일을 설정 합니다." },
    { num: 1, name: "outline-width", desc: "윤곽선의 두께를 설정 합니다." },
    { num: 5, name: "overflow", desc: "내용이 박스보다 큰 경우 넘친 부분에 대해 설정 합니다." },
    { num: 1, name: "overflow-anchor", desc: "콘텐츠 이동을 최소화하기 위해 스크롤 위치를 조정하는 브라우저의 스크롤 고정 동작을 옵트아웃하는 방법을 제공합니다." },
    { num: 1, name: "overflow-block", desc: "콘텐츠가 상자의 블록 시작 및 블록 끝 가장자리를 오버플로할 때 표시되는 내용을 설정합니다." },
    { num: 1, name: "overflow-clip-margin", desc: "클리핑되기 전에 요소가 경계를 벗어나 얼마나 멀리 칠할 수 있는지를 결정합니다." },
    { num: 1, name: "overflow-inline", desc: "콘텐츠가 상자의 인라인 시작 및 끝 가장자리를 오버플로할 때 표시되는 내용을 설정합니다." },
    { num: 1, name: "overflow-wrap", desc: "줄바꿈 위해 단어 쪼개기" },
    { num: 1, name: "overflow-x", desc: "콘텐츠가 블록 수준 요소의 왼쪽 및 오른쪽 가장자리를 오버플로할 때 표시되는 내용을 설정합니다." },
    { num: 1, name: "overflow-y", desc: "콘텐츠가 블록 수준 요소의 위쪽 및 아래쪽 가장자리를 오버플로할 때 표시되는 내용을 설정합니다." },
    { num: 1, name: "overscroll-behavior", desc: "스크롤 영역의 경계에 도달할 때 브라우저가 수행하는 작업을 설정합니다." },
    { num: 1, name: "overscroll-behavior-block", desc: "스크롤 영역의 블록 방향 경계에 도달할 때 브라우저의 동작을 설정합니다." },
    { num: 1, name: "overscroll-behavior-inline", desc: "스크롤 영역의 인라인 방향 경계에 도달할 때 브라우저의 동작을 설정합니다." },
    { num: 1, name: "overscroll-behavior-x", desc: "스크롤 영역의 수평 경계에 도달할 때 브라우저의 동작을 설정합니다." },
    { num: 1, name: "overscroll-behavior-y", desc: "스크롤 영역의 수직 경계에 도달할 때 브라우저의 동작을 설정합니다." },
    { num: 5, name: "padding", desc: "속성의 네 방향 여백을 설정 합니다." },
    { num: 1, name: "padding-block-end", desc: "요소의 쓰기모드, 방향 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 블록 끝 패딩을 정의합니다." },
    { num: 1, name: "padding-block-numt", desc: "요소의 쓰기모드, 방향 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 블록 시작 패딩을 정의합니다." },
    { num: 1, name: "padding-bottom", desc: "요소 내부의 아래쪽 여백을 설정 합니다." },
    { num: 1, name: "padding-inline-end", desc: "요소의 쓰기모드,방향 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 인라인 끝 패딩을 정의합니다." },
    { num: 1, name: "padding-inline-numt", desc: "요소의 쓰기모드,방향 및 텍스트 방향에 따라 물리적 패딩에 매핑되는 요소의 논리적 인라인 시작 패딩을 정의합니다." },
    { num: 1, name: "padding-left", desc: "요소의 왼쪽 여백을 설정 합니다." },
    { num: 1, name: "padding-right", desc: "요소의 오른쪽 여백을 설정 합니다." },
    { num: 1, name: "padding-top", desc: "요소의 상단 여백을 설정 합니다." },
    { num: 1, name: "page-break-after", desc: "페이지 인쇄시 분리에 관한 설정을 정의합니다." },
    { num: 1, name: "page-break-before", desc: "프린터로 출력할 때 다음 페이지로 페이지를 넘기는 것을 지정하는 Property입니다." },
    { num: 1, name: "page-break-inside", desc: "인쇄시 페이지 분리에 관한 설정을 정의합니다." },
    { num: 1, name: "perspective", desc: "3D 위치 요소에 약간의 원근감을 주기 위해 z=0 평면과 사용자 사이의 거리를 결정합니다." },
    { num: 1, name: "perspective-origin", desc: "뷰어가 보고 있는 위치를 결정합니다." },
    { num: 1, name: "place-content", desc: "그리드나 플렉스 레이아웃에서 블록 및 인라인 방향을 따라 콘텐츠를 한 번에 정렬할 수 있습니다." },
    { num: 1, name: "place-items", desc: "그리드나 플렉스 레이아웃에서 블록 및 인라인 방향을 따라 항목을 한 번에 정렬할 수 있습니다." },
    { num: 1, name: "place-self", desc: "그리드나 플렉스 레이아웃에서 블록 및 인라인 방향으로 개별 항목을 한 번에 정리할 수 있습니다." },
    { num: 1, name: "pointer-event", desc: "HTML 요소들의 마우스/터치 이벤트들(CSS hover/active, JS click/tap, 커서 드래그등)의 응답을 조정할 수 있는 속성이다." },
    { num: 1, name: "position", desc: "속성이 배치될 최종 위치를 결정합니다." },
    { num: 1, name: "print-color-adjust", desc: "출력 장치에서 요소의 모양을 최적화하기 위해 사용자 에이전트가 수행할 수 있는 작업을 설정합니다." },
    { num: 1, name: "quotes", desc: "속성 또는 값을 사용하여 추가된 따옴표를 브라우저에서 렌더링하는 방법을 설정 합니다." },
    { num: 1, name: "resize", desc: "요소의 크기를 조정할 수 있는지 여부와 가능한 경우 방향을 설정 합니다." },
    { num: 5, name: "right", desc: "배치된 요소의 수평 위치 지정에 참여합니다." },
    { num: 1, name: "rotate", desc: "속성과 별도로 회전 변환을 지정할 수 있습니다." },
    { num: 1, name: "row-gap (grid-row-gap)", desc: "요소 행 사이의 간격을 설정 합니다." },
    { num: 1, name: "ruby-align", desc: "베이스에 대한 다양한 루비 요소의 분포를 정의합니다." },
    { num: 1, name: "ruby-position", desc: "기본 요소를 기준으로 루비 요소의 위치를 정의합니다." },
    { num: 1, name: "scale", desc: "속성과 별개로 스케일 변환을 개별적으로 지정할 수 있습니다." },
    { num: 1, name: "scroll-behavior", desc: "스크롤이 탐색 또는 CSSOM 스크롤 API에 의해 트리거될 때 스크롤 상자의 동작을 설정합니다." },
    { num: 1, name: "scroll-margin", desc: "요소의 모든 스크롤 여백을 한 번에 설정하여 속성이 요소의 여백에 대해 수행하는 것과 유사한 값을 할당합니다." },
    { num: 1, name: "scroll-margin-block", desc: "블록 차원에서 요소의 스크롤 여백을 설정 합니다." },
    { num: 1, name: "scroll-margin-block-end", desc: "상자를 스냅포트에 맞추는 데 사용되는 블록 치수 끝에서 스크롤 스냅 영역의 여백을 정의합니다." },
    { num: 1, name: "scroll-margin-block-numt", desc: "상자를 스냅포트에 맞추는 데 사용되는 블록 차원의 시작 부분에서 스크롤 스냅 영역의 여백을 정의합니다." },
    { num: 1, name: "scroll-margin-bottom", desc: "상자를 snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 아래쪽 여백을 정의합니다." },
    { num: 1, name: "scroll-margin-inline", desc: "인라인 차원에서 요소의 스크롤 여백을 설정합니다." },
    { num: 1, name: "scroll-margin-inline-end", desc: "상자를 snapport에 맞추는 데 사용되는 인라인 차원의 끝에서 스크롤 스냅 영역의 여백을 정의합니다." },
    { num: 1, name: "scroll-margin-inline-numt", desc: "상자를 snapport에 맞추는 데 사용되는 인라인 차원의 시작부분에서 스크롤 스냅 영역의 여백을 정의합니다." },
    { num: 1, name: "scroll-margin-left", desc: "상자를 snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 왼쪽 여백을 정의합니다." },
    { num: 1, name: "scroll-margin-right", desc: "상자를 snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 오른쪽 여백을 정의합니다." },
    { num: 1, name: "scroll-margin-top", desc: "상자를 snapport에 맞추는 데 사용되는 스크롤 스냅 영역의 위쪽 여백을 정의합니다." },
    { num: 1, name: "scroll-padding", desc: "요소의 모든 면에 스크롤 패딩을 한 번에 설정 합니다." },
    { num: 1, name: "scroll-padding-block", desc: "블록 차원에서 요소의 스크롤 패딩을 설정 합니다." },
    { num: 1, name: "scroll-padding-block-end", desc: "스크롤포트의 최적보기 영역의 블록 차원에서 끝 가장자리에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-padding-block-numt", desc: "스크롤 포트의 최적보기 영역의 블록 차원에서 시작 가장자리에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-padding-bottom", desc: "스크롤포트의 최적 보기영역 하단에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-padding-inline", desc: "인라인 차원에서 요소의 스크롤 패딩을 설정 합니다." },
    { num: 1, name: "scroll-padding-inline-end", desc: "스크롤 포트의 최적보기 영역의 인라인 차원에서 끝 가장자리에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-padding-inline-numt", desc: "스크롤 포트의 최적보기 영역의 인라인 차원에서 시작 가장자리에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-padding-left", desc: "스크롤 포트의 최적 보기영역 왼쪽에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-padding-right", desc: "스크롤 포트의 최적 보기영역 오른쪽에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-padding-top", desc: "스크롤 포트의 최적 보기영역 상단에 대한 오프셋을 정의합니다." },
    { num: 1, name: "scroll-snap-align", desc: "상자의 스냅 위치를 해당 스냅 컨테이너의 스냅포트 내에서 해당 스냅영역의 정렬로 지정합니다." },
    { num: 1, name: "scroll-snap-coordinate", desc: "x" },
    { num: 1, name: "scroll-snap-destination", desc: "x" },
    { num: 1, name: "scroll-snap-points-x", desc: "x" },
    { num: 1, name: "scroll-snap-points-y", desc: "x" },
    { num: 1, name: "scroll-snap-stop", desc: "스크롤 컨테이너가 가능한 스냅 위치를 '통과'할 수 있는지 여부를 정의합니다." },
    { num: 1, name: "scroll-snap-type", desc: "스냅 포인트가 있는 경우 스크롤 컨테이너에 스냅 포인트가 얼마나 엄격하게 적용되는지 설정합니다." },
    { num: 1, name: "scrollbar-color", desc: "스크롤바 트랙과 썸의 색상을 설정 합니다." },
    { num: 1, name: "scrollbar-width", desc: "작성자가 표시될 때 요소의 스크롤 막대의 최대 두께를 설정합니다." },
    { num: 1, name: "shape-image-threshold", desc: "이미지를 값으로 사용하여 모양을 추출하는 데 사용되는 알파 채널 임계값을 설정합니다." },
    { num: 1, name: "shape-margin", desc: "CSS 모양의 여백을 설정 합니다." },
    { num: 1, name: "shape-outside", desc: "인접한 인라인 콘텐츠가 둘러싸야 하는 사각형이 아닐 수 있는 모양을 정의합니다." },
    { num: 1, name: "tab-size", desc: "탭 문자(+ 0009 U)의 폭을 지정하는 데 사용합니다." },
    { num: 1, name: "table-layout", desc: "셀,행 및 열 배치하는데 사용되는 알고리즘을 설정 합니다." },
    { num: 5, name: "text-align ", desc: "블럭 안 요소의 정렬을 설정 합니다." },
    { num: 1, name: "text-align-last", desc: "강제 줄 바꿈 직전의 블록이나 줄의 마지막 줄을 정렬하는 방법을 설정합니다." },
    { num: 1, name: "text-combine-upright ", desc: "문자 조합을 단일 문자 공간으로 설정합니다." },
    { num: 1, name: "text-decoration", desc: "텍스트에 꾸밈 요소를 설정 합니다." },
    { num: 1, name: "text-decoration-color", desc: "텍스트에 추가되는 장식의 색상을 설정 합니다." },
    { num: 1, name: "text-decoration-line", desc: "밑줄이나 윗줄과 같이 요소의 텍스트에 사용되는 장식의 종류를 설정 합니다." },
    { num: 1, name: "text-decoration-skip", desc: "요소에 영향을 미치는 텍스트 장식이 건너뛰어야 하는 요소 콘텐츠의 부분을 설정합니다." },
    { num: 1, name: "text-decoration-skip-ink", desc: "윗줄과 밑줄이 글리프 어센더 및 디센더를 전달할 때 그려지는 방법을 지정합니다." },
    { num: 1, name: "text-decoration-style", desc: "지정된 선의 스타일을 설정 합니다." },
    { num: 1, name: "text-emphasis", desc: "텍스트에 강조 표시를 적용합니다." },
    { num: 1, name: "text-emphasis-color", desc: "강조 표시의 색상을 설정 합니다." },
    { num: 1, name: "text-emphasis-position", desc: "루비 텍스트와 마찬가지로 강조 표시를 위한 공간이 충분하지 않으면 줄 높이가 높아집니다." },
    { num: 1, name: "text-emphasis-style", desc: "강조 표시의 모양을 설정합니다." },
    { num: 1, name: "text-indent", desc: "블록의 텍스트 줄 앞에 배치되는 빈 공간의 길이를 설정 합니다." },
    { num: 1, name: "text-justify", desc: "텍스트에 적용해야 하는 맞춤 유형을 설정 합니다." },
    { num: 1, name: "text-orientation", desc: "줄에서 텍스트 문자의 방향을 설정 합니다." },
    { num: 1, name: "text-overflow", desc: "숨겨진 오버플로 콘텐츠가 사용자에게 신호되는 방식을 설정합니다." },
    { num: 1, name: "text-rendering", desc: "텍스트를 렌더링할 때 최적화할 대상에 대한 정보를 렌더링 엔진에게 제공합니다." },
    { num: 1, name: "text-shadow", desc: "그림자를 추가합니다." },
    { num: 1, name: "text-size-adjust", desc: "일부 스마트폰 및 태블릿에서 사용되는 텍스트 인플레이션 알고리즘을 제어합니다." },
    { num: 1, name: "text-transform", desc: "요소의 텍스트를 대문자로 표시하는 방법을 지정합니다." },
    { num: 1, name: "text-underline-position", desc: "속성 값을 사용하여 설정되는 밑줄의 위치를 지정합니다." },
    { num: 5, name: "top", desc: "태그 위치를 상단 기준으로 어느 높이에 위치시킬건지 설정합니다." },
    { num: 1, name: "touch-action", desc: "터치스크린 사용자가 요소의 영역을 조작하는 방법을 설정합니다." },
    { num: 1, name: "transform", desc: "요소에 회전, 크기조절, 기울이기, 이동 효과를 부여할 수 있습니다." },
    { num: 1, name: "transform-box", desc: "속성이 관련된 레이아웃 상자를 정의합니다." },
    { num: 1, name: "transform-origin", desc: "요소 변형의 원점을 설정합니다." },
    { num: 1, name: "transform-style", desc: "요소의 자식이 3D 공간에 배치되는지 또는 요소 평면에서 병합 되는지 여부를 설정합니다." },
    { num: 5, name: "transition", desc: "애니메이션 효과의 속도를 조절하는 방법을 제공합니다." },
    { num: 1, name: "transition-delay", desc: "전환(transition) 효과가 나타나기 전까지의 지연 시간을 설정합니다." },
    { num: 1, name: "transition-duration", desc: "전환(transition) 효과가 지속될 시간을 설정함." },
    { num: 1, name: "transition-property", desc: "전환 효과를 적용할 CSS 속성을 설정 합니다." },
    { num: 1, name: "transition-timing-function", desc: "전환 효과의 영향을 받는 CSS 속성에 대해 중간 값이 계산되는 방식을 설정합니다." },
    { num: 1, name: "translate", desc: "속성과 별개로 개별적으로 변환을 지정할 수 있습니다." },
    { num: 1, name: "unicode-bidi", desc: "속성과 함께 문서의 양방향 텍스트가 처리되는 방식을 결정합니다." },
    { num: 1, name: "user-select", desc: "text 텍스트를 선택할 수 있습니다. element 텍스트를 선택할 수 있지만 요소 범위로 제한됩니다." },
    { num: 1, name: "vertical-align", desc: "inline 또는 table-cell box에서의 수직 정렬을 지정합니다." },
    { num: 1, name: "visibility", desc: "태그의 가시성을 결정합니다." },
    { num: 1, name: "white-space", desc: "요소의 공백을 어떻게 처리할 지를 정의합니다." },
    { num: 5, name: "widows", desc: "페이지, 영역 또는 열의 상단에 표시되어야 하는 블록 컨테이너의 최소 줄 수를 설정합니다." },
    { num: 5, name: "width", desc: "요소의 너비를 설정 합니다." },
    { num: 1, name: "will-change", desc: "요소에 예상되는 변화의 종류에 관한 힌트를 브라우저에게 제공하게 합니다." },
    { num: 1, name: "word-break", desc: "텍스트들을 줄을 바꾸면서 표시해야 할때 텍스트를 어떤식으로 줄바꿈 해줄지 정하는 속성." },
    { num: 1, name: "word-spacing", desc: "신약과 사이에, 태그와 사이의 거리를 설정합니다." },
    { num: 1, name: "writing-mode", desc: "텍스트 줄을 가로 또는 세로로 배치할지 여부와 블록이 진행되는 방향을 설정합니다." },
    { num: 5, name: "z-index", desc: "요소들의 수직 위치를 설정합니다." },
];


const searchTime = document.querySelector(".time span");
const seaechList = document.querySelector(".search__list");
const searchAnswers = document.querySelector(".search__answers");
const seaechMissAnswers = document.querySelector(".search__missAnswers");
const searchStart = document.querySelector(".search__box .start");
const searchInput = document.querySelector("#search");
const searchAudio = document.querySelector("#audio");
const searchAudioBtn = document.querySelector(".search__audio > span");
const searchScoreRotal = document.querySelector(".search__info .num");  // 전체 속성 갯수
const searchScoreNow = document.querySelector(".search__info");         // 현재 맞춘 갯수
const searchResult = document.querySelector(".search__result .result");
const searchResultWrap = document.querySelector(".search__result");
const searchRestart = document.querySelector(".search__result .restart");

let timeReamining = 5,     // 남은시간
    timeIntreval,           //시간 간격
    score = 0,              // 점수
    answers = {};          // 새로운 정답


// 힌트보기
function updateList() {
    cssProperty.forEach(data => {
        seaechList.innerHTML += `<span>${data.name}</span>`;
    })
}
updateList();

// 게임 시작하기
function startQuiz() {

    // 시작 버튼 없애기 & // 속성 리스트 없애기
    searchStart.style.display = "none";
    seaechList.style.display = "none";

    // 다시 시작할때 기존 데이터 초기화
    searchAnswers.innerHTML = "";
    seaechMissAnswers.innerHTML = "";

    // 시간 설정
    timeIntreval = setInterval(reduceTime, 1000);


    // 게임이 시작되면 시간 설정
    setInterval(reduceTime, 1000);  // 1초에 한번씩 실행..

    // 뮤직 추가하기
    searchAudio.play();

    // 점수 계산
    searchScoreRotal.innerText = cssProperty.length;

    // 정답 체크
    checkAnswers();

    // 
}

// 음악 설정
function audio(){
    searchAudioBtn.addEventListener("click", () => {
        searchAudioBtn.classList.toggle("playing");
        if(searchAudioBtn.classList.contains("playing")){
            searchAudio.play();
        } else {
            searchAudio.pause();
        }
    })
    searchAudio.play();
}

// 인풋 체크하기
function checkInput() {
    let input = event.currentTarget.value.trim().toLowerCase();

    // 사용자가 씀..
    if (answers.hasOwnProperty(input) && !answers[input]) {  //중복 방지 true로...?
        answers[input] = true;

        // 정답 표시
        searchAnswers.style.display = "block";
        searchAnswers.innerHTML += `<span>${input}</span>`;

        // 점수 반영
        score++;
        searchScoreNow.innerText = score;

        // 정답을 맞추면 정답 초기화
        searchInput.value = "";
    }
}

// 정답 체크하기 : 정답을 객체 파일로 만들기
function checkAnswers() {
    cssProperty.forEach(item => {
        let answer = item.name.trim().toLowerCase();
        answers[answer] = false;
    });
    console.log(answers)
}

// 오답 보여주기
function missAnswers(){
    seaechMissAnswers.style.display = "block";
    cssProperty.forEach(item => {
        let answer = item.name.trim().toLocaleLowerCase();
        if(!answers[answer]){
            seaechMissAnswers.innerHTML += `<span>${answer}</span>`;
        }
    });
}

// 시간 설정하기
function reduceTime() {
    timeReamining--;

    // 시간이 끝났을 때
    if (timeReamining == 0) endQuiz();

    searchTime.innerText = displayTime();
}

// 시간 표시하기 -0보다 크면...return값으로 나오게...
function displayTime() {
    if (timeReamining <= 0) {
        return "0:00";
    } else {
        let minutes = Math.floor(timeReamining / 60);
        let seconds = timeReamining % 60;

        // 초 단위가 한자리 수 일때 0 추가하기
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
}

// 게임이 끝났을 때
function endQuiz() {
    // alert("게임이 끝났습니다!");

    // 시작버튼 만들기
    searchStart.style.display = "block";
    searchStart.style.pointerEvents = "none";

    // 오답 보여주기
    missAnswers();

    // 음악 끄기
    searchAudio.pause();
    searchAudioBtn.classList.remove("playing");

    // 시간 정지
    clearInterval(timeIntreval);

    // 메세지 출력
    searchResultWrap.classList.add("show");
    let point = Math.round((score / cssProperty.length) * 100);
    searchResult.innerHTML = `게임이 끝났습니다.<br> 당신은 ${cssProperty.length}개중에 ${score} 개를 맞추었습니다.<br> 당신의 점수는 ${point}점입니다.`

}

// 다시 시작하기
function restart(){
    searchResultWrap.classList.remove("show");
    searchAudioBtn.classList.remove("playing");
    searchAudio.play();
    startQuiz();
    timeReamining = 120;
    score = 0;
    searchScoreNow.innerText = "0";
}

// 버튼 이벤트
searchStart.addEventListener("click", startQuiz);
searchInput.addEventListener("input", checkInput);
searchRestart.addEventListener("click", restart);