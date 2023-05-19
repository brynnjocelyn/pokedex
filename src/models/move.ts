export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: {
    normal: {
      use_after: null | { name: string; url: string }[];
      use_before: null | { name: string; url: string }[];
    };
    super: {
      use_after: null | { name: string; url: string }[];
      use_before: null | { name: string; url: string }[];
    };
  };
  contest_type: {
    name: string;
    url: string;
  };
  contest_effect: {
    url: string;
  };
  damage_class: {
    name: string;
    url: string;
  };
  effect_entries: {
    effect: string;
    short_effect: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  effect_changes: {
    effect_entries: {
      effect: string;
      version_group: {
        name: string;
        url: string;
      };
    }[];
    version_group: {
      name: string;
      url: string;
    };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  generation: {
    name: string;
    url: string;
  };
  machines: {
    machine: {
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  meta: {
    ailment: {
      name: string;
      url: string;
    };
    ailment_chance: number;
    category: {
      name: string;
      url: string;
    };
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits: null;
    max_turns: null;
    min_hits: null;
    min_turns: null;
    stat_chance: number;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
  past_values: {
    accuracy: number;
    effect_chance: number;
    effect_entries: {
      effect: string;
      short_effect: string;
      language: {
        name: string;

        url: string;
      };
    }[];
    power: number;
    pp: number;
    type: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
  stat_changes: {
    change: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  super_contest_effect: {
    url: string;
  };
  target: {
    name: string;
    url: string;
  };
  type: {
    name: string;
    url: string;
  };
}
