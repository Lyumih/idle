namespace $.$$ {
	export class $idle_app_dice extends $.$idle_app_dice {

		@$mol_mem
		money( next?: number ) {
			return next ?? 0
		}

		money_label(): string {
			return '🪙' + this.money()
		}

		@$mol_mem
		dices( next?: { level: number, mult: number, cost: number }[] ) {
			console.log( next )
			return next ?? [ {
				id: '0',
				level: 1,
				mult: 1,
				cost: 1
			},
				{
				id: '1',
				level: 2,
				mult: 2,
				cost: 10
			} ]
		}

		dice_list(){
			return this.dices().map( ( dice, index ) => this.Dice_box( index ) )
		}

		get_dice(id: string) {
			return this.dices()[+id]
		}

		dice_level_label( id: any ): string {
			return '⭐' + this.get_dice(id).level
		}

	}
}
