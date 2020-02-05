import React, { useEffect, useState } from "react"

interface Props {
  guard: () => Promise<boolean>
  children?: React.ReactNode
}

const GuardRoutes = ({ guard, children }: Props) => {
  const [ready, setReady] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    const callGuard = async () => {
      const hasAccess: boolean = await guard()

      setHasAccess(hasAccess)
      setReady(true)
    }

    callGuard()
  }, [guard])

  if (!ready) {
    return null
  }

  return (
    <>
      {hasAccess ? children : <div>You have not access to this routes</div>}
    </>
  )
}

export default GuardRoutes