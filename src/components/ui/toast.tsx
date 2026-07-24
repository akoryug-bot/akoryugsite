import * as React from "react"

export interface ToastProps {
  id?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface ToastActionElement {
  altText: string
  action: () => void
}
