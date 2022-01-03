import localforage from 'localforage'
import { Position } from '../@types/Position'

class StageService {
  static STAGE_SCROLL_ID = '__STAGE_SCROLL_ID__'

  stage = localforage.createInstance({ name: 'stage' })

  /**
   * Get stage scrolling position
   *
   */
  async getStageScrolling(): Promise<Position> {
    let position = await this.stage.getItem<Position>(StageService.STAGE_SCROLL_ID)

    return position || (await this.setStageScrolling(Position.Zero))
  }

  /**
   * Set stage scrolling position
   *
   */
  async setStageScrolling(pos: Position) {
    return await this.stage.setItem(StageService.STAGE_SCROLL_ID, pos)
  }
}
