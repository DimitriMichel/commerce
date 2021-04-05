import cn from 'classnames'
import { FC, ReactNode, Component } from 'react'
import s from './Grid.module.css'

interface Props {
  className?: string
  children?: ReactNode[] | Component[] | any[]
  layout?: 'A' | 'B' | 'C' | 'D' | 'normal'
  variant?: 'default' | 'filled'
}

const Grid: FC<Props> = ({
  className,
  layout = 'A',
  children,
  variant = 'default',
}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.layoutA]: layout === 'A',
      [s.layoutB]: layout === 'B',
      [s.layoutC]: layout === 'C',
      [s.layoutD]: layout === 'D',
      [s.layoutNormal]: layout === 'normal',
      [s.default]: variant === 'default',
      [s.filled]: variant === 'filled',
    },
    className
  )
  return (
    <div>
      <div className="w-full flex flex-row  " style={{ height: '85vh' }}>
        <div className="container ">
          <div className="bg-blue-blouse bg-contain bg-no-repeat h-full">
            <div className="h-full flex flex-col justify-center align-middle w-full">
              <a className="w-full flex align-middle justify-center" href="#">
                Shop
              </a>
            </div>{' '}
          </div>
        </div>
        <div className="container">
          <div className="bg-beige-sweater  bg-contain bg-no-repeat h-full">
            {' '}
          </div>
        </div>
        <div className="container">
          <div className="bg-brown-top  bg-contain bg-no-repeat h-full"> </div>
        </div>
      </div>
      <div className={rootClassName}>{children}</div>
    </div>
  )
}

export default Grid
