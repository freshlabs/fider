import React from "react"
import { classSet } from "@fider/services"

import "./PoweredByFider.scss"

interface PoweredByFiderProps {
  slot: string
  className?: string
}

export const PoweredByFider = (props: PoweredByFiderProps) => {
  //const source = encodeURIComponent(window?.location?.host || "")
  //const medium = "powered-by"
  //const campaign = props.slot

  const className = classSet({
    "c-powered": true,
    [props.className || ""]: props.className,
  })

  return (
    <div className={className}>
      Roadmap for
      <a rel="noopener" href="https://www.freshstore.app" target="_blank">
        FreshStore Affiliate Stores
      </a>
    </div>
  )
}
