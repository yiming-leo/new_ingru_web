'use client'
import { create } from 'zustand'
import { useEffect } from 'react';

type Store = {
  count: number
  inc: () => void
  isshowTab: boolean
  setIsshowTab: (val: boolean) => void;
  isProvideList: boolean;
  setIsProvideList: any;
  price: number
  setPrice: any

  totalPrice: number;
  setTotalPrice: any
  isToFast: any;
  setIsToFast: any
  isPC: any;
  setIsPC: any
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  isPC: false,
  setIsPC: (val: boolean) => {
    set({ isPC: val })
  },

  isshowTab: true,
  setIsshowTab: (val: boolean) => {
    set({ isshowTab: val })
  },

  isProvideList: true,
  setIsProvideList: (val: boolean) => {
    set({ isProvideList: val })
  },

  price: 0,
  setPrice: (val: number) => {
    set({ price: val })
  },

  totalPrice: 0,
  setTotalPrice: (val: number) => {
    set({ totalPrice: val })
  },

  isToFast: false,
  setIsToFast: (val: boolean) => {
    set({ isToFast: val })

  },
}))

