import { ref, computed, type Ref, type ComputedRef } from "vue";
import type { Scenario, AttributionSignal } from "./types";
import { scenarios, attributionSignals, scenarioSignalsMap } from "./data";

// Create an "All" scenario object for UI purposes
const allScenario: Scenario = {
  id: "all",
  name: "All",
  description: "Show all attribution signals",
  url: "/attribution-signals",
};

// Selected filter (single value, like radio button)
const selectedFilter: Ref<Scenario> = ref(allScenario);

// All scenarios including "All" for UI
const allScenarios: Scenario[] = [allScenario, ...scenarios];

// Computed property for filtered items
const filteredItems: ComputedRef<AttributionSignal[]> = computed(() => {
  if (selectedFilter.value.id === "all") {
    return attributionSignals;
  }

  const signalIds = scenarioSignalsMap[selectedFilter.value.id];
  return attributionSignals.filter((signal) => signalIds.includes(signal.id));
});

// Select filter function
const selectFilter = (scenario: Scenario): void => {
  selectedFilter.value = scenario;
};

export interface UseFilterReturn {
  items: Ref<AttributionSignal[]>;
  allScenarios: Scenario[];
  selectedFilter: Ref<Scenario>;
  filteredItems: ComputedRef<AttributionSignal[]>;
  selectFilter: (scenario: Scenario) => void;
}

export function useFilter(): UseFilterReturn {
  return {
    items: ref(attributionSignals),
    allScenarios,
    selectedFilter,
    filteredItems,
    selectFilter,
  };
}
