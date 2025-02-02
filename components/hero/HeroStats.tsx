import { FC } from 'react'
import FormatEth from 'components/FormatEth'
import { formatNumber } from 'lib/numbers'
import FormatWEth from 'components/FormatWEth'

type Props = {
  count: number
  topOffer: number | undefined
  floor: number | undefined
  allTime: number | undefined
  volumeChange: number | undefined
  floorChange: number | undefined
}

const HeroStats: FC<{ stats: Props }> = ({ stats }) => {
  return (
    <div className="grid min-w-full grid-cols-2 items-center gap-[1px]
      dark:border-[#89c659] border-2 dark:bg-[#89c659] md:m-0 md:h-[82px] md:min-w-[647px]
      md:grid-cols-4 md:gap-2 md:bg-white dark:md:bg-black"
    >
      <Stat name="Punks">
        <h3 className="reservoir-h6 dark:text-white">
          <span className="font-mono font-bold">{formatNumber(stats.count)}</span>
        </h3>
      </Stat>
      <Stat name="Offer">
        <h3 className="reservoir-h6 dark:text-white">
          <FormatWEth amount={stats.topOffer} />
        </h3>
      </Stat>
      <Stat name="Floor">
        <h3 className="reservoir-h6 flex items-center justify-center gap-1 dark:text-white">
          <FormatEth amount={stats.floor} maximumFractionDigits={2} />
          <PercentageChange value={stats.floorChange} />
        </h3>
      </Stat>
      <Stat name="Volume">
        <h3 className="reservoir-h6 flex items-center justify-center gap-1 dark:text-white">
          <FormatEth amount={stats.allTime} maximumFractionDigits={2} />
        </h3>
      </Stat>
    </div>
  )
}

const Stat: FC<{ name: string }> = ({ name, children }) => (
  <div className="flex h-20 flex-col items-center justify-center bg-white dark:bg-black md:h-auto">
    {children}
    <p className="mt-1 text-neutral-300">{name}</p>
  </div>
)

export const PercentageChange: FC<{ value: number | undefined | null }> = ({
  value,
}) => {
  if (value === undefined || value === null) return null

  const percentage = (value - 1) * 100

  if (percentage > 100 || value === 0) {
    return null
  }

  if (value < 1) {
    return (
      <div className="text-xs text-[#FF3B3B] font-mono">{formatNumber(percentage)}%</div>
    )
  }

  if (value > 1) {
    return (
      <div className="text-sm text-[#06C270] font-mono">+{formatNumber(percentage)}%</div>
    )
  }

  return null
}

export default HeroStats
