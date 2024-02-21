namespace $.$$ {
	export class $idle_app_dps extends $.$idle_app_dps {

		@$mol_mem
		money( next?: number ) {
			return next ?? 0
		}

		money_title() {
			return '🪙' + this.money()
		}

		@$mol_mem
		health( next?: number ) {
			return next ?? 3
		}

		health_title() {
			return '❤️' + this.health()
		}

		damage() {
			return this.damage_level() * 2 + 1
		}

		@$mol_mem
		level( next?: number ) {
			return next ?? 0
		}

		level_title() {
			return '⭐' + this.level()
		}

		attack_enemy() {
			console.log( 'attack_enemy' )
			this.health( this.health() - this.damage() )
			if( this.health() <= 0 ) {
				console.log( 'lvl up' )
				this.level( this.level() + 1 )
				this.health( this.level() * 2 + 5 )
				this.money( this.money() + this.level() )
			}
		}

		@$mol_mem
		auto_attack() {
			if( this.auto_checked() ) {
				console.log( 'auto attack' )
				this.attack_enemy()
				this.$.$mol_state_time.now( 500 )
			}
		}

		damage_title() {
			return '⚔️' + this.damage()
		}

		@$mol_mem
		damage_level( next?: number ) {
			return next ?? 0
		}

		damage_up() {
			this.money( this.money() - this.damage_up_cost() )
			this.damage_level( this.damage_level() + 1 )
		}

		damage_up_cost() {
			return this.damage_level() * 2 + 1
		}

		damage_up_enabled() {
			return this.damage_up_cost() <= this.money()
		}

		damage_up_title() {
			return '⚔️' + this.damage() + '🌟' + this.damage_level() + '💲' + this.damage_up_cost()
		}

		skill_x10( next?: any ) {
			for( let i = 0; i < 10; i++ ) {
				console.log( 123 )
				this.attack_enemy()
			}
		}

	}
}
