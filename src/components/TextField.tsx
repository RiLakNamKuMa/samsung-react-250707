// [250711] 텍스트 필드가 요소 참조 할 수 있는 기능 확장을 위해 ref 추가
export default function TextField({
  ref,
  label,
  ...restProps // 모아주고
}: {
  ref?: React.RefObject<HTMLInputElement | null>
  label?: string
  //restProps 이전 설정
  //value?: string
  //onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <label className="flex flex-col gap-1">
        {label && <span className="text-xs text-gray-500">{label}</span>}
        <input
          {...restProps}
          ref={ref}
          className="boarder-1 boarer-gray-500 h-[32px] rounded-md px-2"
        />
      </label>
    </>
  )
}
