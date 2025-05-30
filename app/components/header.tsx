// Header.tsx
'use client';
import React, { useEffect } from 'react'
import HeaderBg from '@/public/images/slide-1.jpg'
import LearnMore from '../utils/learnMore'
import Image from 'next/image'

const Header = () => {
  useEffect(() => {
  const canvas = document.createElement('canvas')
  canvas.style.position = 'absolute'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.zIndex = '15'
  canvas.style.pointerEvents = 'none'

  const parent = document.querySelector('.relative')
  if (!parent) return

  parent.appendChild(canvas)

  let ctx: CanvasRenderingContext2D | null = null

  const init = () => {
    ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    const particles: Particle[] = Array.from({ length: 50 }, () => new Particle())

    let animationId: number
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    cleanup = () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      canvas.remove()
    }
  }

  let cleanup = () => {}

  // Wait for DOM to render and canvas to attach
  requestAnimationFrame(init)

  return () => cleanup()
}, [])


  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 sm:p-12 overflow-hidden">
      {/* Background Image */}
      <Image 
        src={HeaderBg} 
        alt="African landscape"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay to darken image */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl space-y-5">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#f1f1f1] tracking-tight">
          IDEA IS CAPITAL
        </h1>

        <p className="text-lg sm:text-xl text-white font-medium">
          Innovative | Imaginational | Creative
        </p>

        <div className="py-3">
          <LearnMore path="#journey"  />
        </div>

        <p className="text-base sm:text-lg text-[#f1f1f1]/90 italic">
          Solution Oriented Company for Africa's Young Generation
        </p>
      </div>
    </div>
  )
}

export default Header