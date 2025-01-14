import { LeaderBoardItemModel } from "../models/leaderboard.model";

const localStorageLeaderBoardKey = 'leaderboard-data';

export class LeaderBoardService {
    static getAll(): LeaderBoardItemModel[] {
        const leaderboardDataString = localStorage.getItem(localStorageLeaderBoardKey) ?? "[]";
        const leaderboardDataArray = JSON.parse(leaderboardDataString);
        return leaderboardDataArray;
    }

    static saveResult(item: LeaderBoardItemModel) {
        const currentData = this.getAll();
        currentData.push(item);
        const newDataString = JSON.stringify(currentData);
        localStorage.setItem(localStorageLeaderBoardKey, newDataString);
    }
}