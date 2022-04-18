import { FC } from 'react'
import css from './DragLayer.module.scss'
import { useDragLayer, XYCoord } from 'react-dnd'
import { NoteDragPreview } from '../NoteDragPreview'

interface DragLayerProps {}

function getItemStyles(initialOffset: XYCoord | null, currentOffset: XYCoord | null) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }

  return {
    willChange: 'transform',
    transform: `translate3d(${currentOffset.x}px, ${currentOffset.y}px, 0)`,
  }
}

export const DragLayer: FC<DragLayerProps> = (props) => {
  let { item, itemType, isDragging, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }))

  function renderItem() {
    switch (itemType) {
      case 'note':
        return <NoteDragPreview title={item.id} preview />
      default:
        return null
    }
  }

  if (!isDragging) {
    return null
  }

  return (
    <div className={css.root}>
      <div style={getItemStyles(initialOffset, currentOffset)}>{renderItem()}</div>
    </div>
  )
}
