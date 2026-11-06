// ─────────────────────────────────────────────────────────────
// 레슨 1 실습: 상품 목록 만들기
//
// 목표 화면 (상품 3개가 카드로 나오면 성공):
//   ┌──────────────────────┐
//   │ 아메리카노   4,500원  │
//   │ #커피 #따뜻한         │
//   └──────────────────────┘
//   ┌──────────────────────┐
//   │ 딸기라떼   [품절]     │   ← soldOut이면 가격 대신 [품절]
//   │ #시즌한정             │
//   └──────────────────────┘
//
// 할 일
//   TODO 1. ProductCard가 props로 name, price, tags, soldOut을 받게 하기
//           (soldOut은 기본값 false)
//   TODO 2. soldOut이면 "[품절]", 아니면 "4,500원"처럼 표시하기
//           힌트: price.toLocaleString()  →  4500 → "4,500"
//   TODO 3. tags 배열을 "#커피 #따뜻한"처럼 화면에 보여주기 (map + key)
//   TODO 4. Exercise에서 products 배열을 map으로 돌려서 ProductCard를 렌더링하기
//
// 보너스
//   ★ Example.jsx의 Section처럼 children을 받는 Menu 컴포넌트를 만들고,
//     상품 목록 전체를 <Menu title="오늘의 메뉴">...</Menu>로 감싸기
// ─────────────────────────────────────────────────────────────

// TODO 1
function ProductCard() {
  return (
    <div className="card">
      {/* TODO 2, TODO 3 */}
      <p>여기에 상품 정보를 표시하세요</p>
    </div>
  )
}

export default function Exercise() {
  const products = [
    { id: 1, name: '아메리카노', price: 4500, tags: ['커피', '따뜻한'] },
    { id: 2, name: '딸기라떼', price: 6000, tags: ['시즌한정'], soldOut: true },
    { id: 3, name: '크루아상', price: 3800, tags: ['베이커리', '버터'] },
  ]

  return (
    <div>
      {/* TODO 4: products.map(...) */}
      <ProductCard />
    </div>
  )
}
