export default function TextField({
  label,
  ...restProps // 모아주고
}: {
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
          className="boarder-1 boarer-gray-500 h-[32px] rounded-md px-2"
        />
      </label>
    </>
  )
}
