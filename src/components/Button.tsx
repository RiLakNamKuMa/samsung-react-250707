import Loader from '@/components/Loader'
import { twMerge } from 'tailwind-merge'

export default function Button({
  children,
  loading = false,
  variant = 'secondary',
  ...restProps
}: {
  children: React.ReactNode
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...restProps}
      className={twMerge(
        'relative h-[32px] cursor-pointer rounded-md hover:brightness-125',
        variant === 'primary' && 'bg-blue-500 text-white',
        variant === 'secondary' && 'bg-gray-300 text-gray-800',
        variant === 'danger' && 'bg-red-500 text-white'
      )}>
      {loading ? <Loader color="#ffff" /> : children}
    </button>
  )
}
