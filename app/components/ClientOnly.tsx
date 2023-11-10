"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
  children
}) => {
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [])
  if (!isLoading) return null

  return children;
}

export default ClientOnly;