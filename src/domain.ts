export interface ReviewRecord {
  principal: string | number;
  system: string | number;
  risk: string | number;
  status: string | number;
}

export class AccessReviewEngineStore {
  private items: ReviewRecord[] = [];

  seed(records: ReviewRecord[]): void {
    this.items = [...records];
  }

  list(): ReviewRecord[] {
    return [...this.items];
  }

  summary(): { total: number; states: Record<string, number> } {
    const states: Record<string, number> = {};
    for (const item of this.items) {
      const key = String((item as Record<string, unknown>).status ?? "unknown");
      states[key] = (states[key] ?? 0) + 1;
    }
    return { total: this.items.length, states };
  }
}

export const seedAccessReviewEngine: ReviewRecord[] = [
  {"principal": "analyst-12", "system": "warehouse", "risk": "medium", "status": "open"},
  {"principal": "contractor-2", "system": "prod-admin", "risk": "high", "status": "escalated"},
  {"principal": "engineer-7", "system": "feature-store", "risk": "low", "status": "approved"}
];
