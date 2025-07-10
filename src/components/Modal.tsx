import { twJoin } from 'tailwind-merge'
// import { useNavigate } from 'react-router'

// [250710] offModal props 지정 (navigate 설정 위해)

export default function Modal({
  children,
  offModal
}: {
  children: React.ReactNode
  offModal: () => void
}) {
  // [250710] Modal 을 끄는 동작은 바깥에서 받아서 사용하기 위해 주석 처리
  //   const navigate = useNavigate()
  //   function offModal() {
  //     navigate(-1)
  //   }

  // [250710] twJoin으로 정리 가능!!!
  //className="overlay absolute top-0 left-0 h-full w-full cursor-pointer bg-black/70"
  // z-index : 10 이상은 쓰지 말자! 관리 어려움, 위로 끌어올리는 옵션
  // max-h-[calc(100% - 100px)] -> max-h-[calc(100%-100px)] : tailwind css 띄워쓰기 사용 X

  return (
    <div
      className={twJoin(
        'modal',
        'fixed top-0 left-0 z-9',
        'flex items-center justify-center',
        'h-[100vh] w-[100vw]'
      )}>
      <div
        className={twJoin(
          'overlay',
          'absolute top-0 left-0',
          'h-full w-full',
          'cursor-pointer bg-black/70'
        )}
        onClick={offModal}></div>
      <div
        className={twJoin(
          'content',
          'max-h-[calc(100%-100px)] w-[max-content] max-w-[700px]',
          'overflow-auto rounded-[10px] p-5',
          'relative bg-white shadow-lg'
        )}>
        {children}
      </div>
    </div>
  )
}
