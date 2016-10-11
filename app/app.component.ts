import {Component} from "@angular/core";

import { PlayerService } from "./services/players.service";

@Component({
    moduleId: __moduleName,
    selector: "native-futbol",
    templateUrl: "app.component.html",
})
export class AppComponent {
    players: any[];
    private _playerService: PlayerService;

    ngOnInit() {
        this.players = this._playerService.getPlayers(); 
    }
}
