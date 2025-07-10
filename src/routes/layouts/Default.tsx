import { motion, AnimatePresence } from 'framer-motion'
import { useOutlet, ScrollRestoration } from 'react-router'
import Header from '@/components/Header'

// [250710] 페이지 전환 <AnimatePresence><motion.div> ...
export default function Default() {
  const outlet = useOutlet()
  // const location =
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }}
          transition={{ duration: 0.2, ease: 'linear' }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
      <ScrollRestoration />
    </>
  )
}
